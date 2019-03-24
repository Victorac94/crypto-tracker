import * as actionTypes from './actionTypes';

export const fetchCoinFullData = (symbol, fullName) => {
  return {
    type: actionTypes.FETCH_COIN_FULL_DATA,
    symbol: symbol,
    fullName: fullName
  }
}

export const fetchCoinFullDataSucceed = (fullData, symbol, fullName) => {
  return {
    type: actionTypes.FETCH_COIN_FULL_DATA_SUCCEED,
    fullData: fullData,
    symbol: symbol,
    fullName: fullName
  }
}
