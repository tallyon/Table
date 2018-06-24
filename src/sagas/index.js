// @flow
import { all, fork, takeLatest } from 'redux-saga/effects';
import { actions as LOGIN_ACTIONS } from '../ducks/login';
import { actions as ADRESS_LIST_ACTIONS } from '../ducks/adressList';
import { login } from './login';
import { adressList } from './adressList';

function* watchLogin(): Generator<*, *, *> {
  yield takeLatest(LOGIN_ACTIONS.REQUEST, login);
}
function* watchEventList(): Generator<*, *, *> {
  yield takeLatest(ADRESS_LIST_ACTIONS.REQUEST, adressList);
}

function* rootSaga(): Generator<*, *, *> {
  yield all([fork(watchLogin), fork(watchEventList)]);
}

export default rootSaga;