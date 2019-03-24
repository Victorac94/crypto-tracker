import axios from 'axios';
import { put } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes';
import { fetchCoinFullDataSucceed } from '../actions/fetchCoinFullDataActions';
import { clearError } from '../actions/generalActions';

export function* fetchCoinFullDataSaga (payload) {
  try {
    const response = yield axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${payload.symbol}&tsyms=USD,EUR`);
    console.log(response);

    yield put(fetchCoinFullDataSucceed(response.data, payload.symbol, payload.fullName))
    yield put(clearError());
  } catch {
    console.log("There was an error fetching coin's full data");
  }
}
