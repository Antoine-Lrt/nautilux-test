import { takeLatest, all, call, put, fork, delay } from 'redux-saga/effects';

import { getInterventionsSuccess, getInterventionsError } from '../actions/index';
import { fetchIntersApi } from './apiRequest';

import * as types from '../actions/types';

function* getInterventionsAsync() {
  try {
    const response = yield call(fetchIntersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getInterventionsSuccess(response.data));
    }
  } catch (err) {
    yield put(getInterventionsError(err));
  }
}

export function* getInterventions() {
  yield takeLatest(types.GET_INTERVENTIONS, getInterventionsAsync);
}

const intersSagas = [fork(getInterventions)];

export default function* rootSaga() {
  yield all([...intersSagas]);
}
