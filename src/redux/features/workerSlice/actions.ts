import { createAction } from "@reduxjs/toolkit";

// Pure Actions
// Request Actions
const UPDATE_WORKER_DETAILS_START = "UPDATE_WORKER_DETAILS_START";
export const updateWorkerDetailsStart = createAction<void>(UPDATE_WORKER_DETAILS_START);
