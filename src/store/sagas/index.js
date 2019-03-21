//takeEvery nos permite escuchar ciertas acciones y hacer algo cuando esto ocurra
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchTopVolume24 } from './fetchTopVolumeSaga';
import { fetchDetails } from './fetchDetailsSaga';

export function* watchActions() {
  yield takeEvery(actionTypes.FETCH_TOP_VOLUME_24, fetchTopVolume24);
  yield takeEvery(actionTypes.FETCH_DETAILS, fetchDetails);
}
