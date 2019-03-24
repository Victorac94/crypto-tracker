import * as actionTypes from './actionTypes';

export const fetchCoinHistoryDay = (symbol) => {
  return {
    type: actionTypes.FETCH_COIN_HISTORY_DAY,
    symbol: symbol
  }
};

export const fetchCoinHistoryDaySucceed = (data, symbol) => {
  return {
    type: actionTypes.FETCH_COIN_HISTORY_DAY_SUCCEED,
    data: data,
    symbol: symbol
  }
};
