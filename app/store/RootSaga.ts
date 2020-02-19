import { all, fork } from 'redux-saga/effects';

import mainScreenSaga from '@core/pages/MainScreen/store/saga';

export default function* rootSaga() {
  yield all([fork(mainScreenSaga)]);
}
