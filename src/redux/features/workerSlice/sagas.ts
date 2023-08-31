import { takeLatest, call, fork, put, select } from "redux-saga/effects";
import { toast } from "react-toastify";

import { saveWorkerDetails } from "./api";

import { selectWorkerAndUpdates } from "./selectors";

import { updateWorkerDetailsStart } from "./actions";

import { setWorkerEditMode, setWorkerLoading } from ".";

// Worker Sagas
function* saveWorkerDetailsCall() {
  /* Grab data from redux store */
  // const payload = yield select(selectWorkerAndUpdates);

  // Starts saving progress
  const id = toast.loading("Saving Worker...");
  const testLoad = new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    yield put(setWorkerLoading(true));
    /* Commented as not connected to any database, but call API to update worker */
    // yield call(saveWorkerDetails, payload);
    yield testLoad;
    toast.update(id, {
      render: "Worker Saved.",
      type: "success",
      isLoading: false,
      autoClose: 3000
    });
    yield put(setWorkerEditMode(false));
  } catch (error) {
    toast.update(id, {
      render: `${error.message}`,
      type: "error",
      isLoading: false,
      closeButton: true
    });
    console.error(error);
  } finally {
    yield put(setWorkerLoading(false));
  }
}

// Watcher Sagas
function* watchUpdateWorkerDetailsStart() {
  yield takeLatest(updateWorkerDetailsStart, saveWorkerDetailsCall);
}

const workerSagas = [
  // Request Watchers
  fork(watchUpdateWorkerDetailsStart)
];

export default workerSagas;
