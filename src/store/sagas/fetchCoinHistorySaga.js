import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchCoinHistoryActions from '../actions/fetchCoinHistoryActions';
import * as generalActions from '../actions/generalActions';

export function* fetchCoinHistoryDay(payload) {
  try {
    const response = yield axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${payload.symbol}&tsym=USD&limit=10`);
    console.log(response);

    if (response.data.Response === 'Error') {
      throw `Error fetching ${payload.symbol}'s details`;
    }
    yield put(fetchCoinHistoryActions.fetchCoinHistoryDaySucceed(response.data, payload.symbol));
  } catch (error) {
    console.log(error);
    yield put(generalActions.fetchFailed(error))
  }
}
