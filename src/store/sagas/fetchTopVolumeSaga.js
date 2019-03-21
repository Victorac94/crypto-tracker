import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchDataActions from '../actions/fetchDataActions';
import { fetchFailed } from '../actions/generalActions';


// TOP VOLUME IN 24H

export function* fetchTopVolume24() {
  try {
    const response = yield axios.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD&api_key=e98be82d42b0a4b4e34ab29d5dd0d79c809603e21cebcdb5c920610b6d4ce155");
    console.log(response);

    if (response.data.Response === "Error") {
      throw "Error fetching Top Coins by Volume 24h";
    }
    yield put(fetchDataActions.fetchTopVolume24Succeed(response.data.Data));

  } catch (error) {
    console.log("Error fetching Top Volume 24h");
    yield put(fetchFailed(error));
  }
}
