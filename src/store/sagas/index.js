//takeEvery nos permite escuchar ciertas acciones y hacer algo cuando esto ocurra
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchTopVolume24 } from './fetchTopVolumeSaga';
import { fetchCoinHistoryDay } from './fetchCoinHistorySaga';
import { fetchCoinFullDataSaga } from './fetchCoinFullDataSaga';

export function* watchActions() {
  yield takeEvery(actionTypes.FETCH_TOP_VOLUME_24, fetchTopVolume24);
  yield takeEvery(actionTypes.FETCH_COIN_HISTORY_DAY, fetchCoinHistoryDay);
  yield takeEvery(actionTypes.FETCH_COIN_FULL_DATA, fetchCoinFullDataSaga);
}
