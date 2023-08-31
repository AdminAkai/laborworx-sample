import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { workerSlice } from "./features";

import workerSagas from "./features/workerSlice/sagas";

const sagas = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["worker"]
};

const reducers = combineReducers({
  worker: workerSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleWares = [sagas];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    ...middleWares
  ]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;

function* rootSaga() {
  yield all([...workerSagas]);
}

sagas.run(rootSaga);

export const persistor = persistStore(store);

export default store;
