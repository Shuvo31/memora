import { all } from 'redux-saga/effects';

// This is where you will yield all your watchers
export default function* rootSaga() {
  yield all([
    // e.g. watchFetchMemories()
  ]);
}
