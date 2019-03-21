import * as actionTypes from './actionTypes';

export const fetchDetails = (symbol) => {
  return {
    type: actionTypes.FETCH_DETAILS,
    symbol: symbol
  }
};

export const fetchDetailsSucceed = (data, symbol) => {
  return {
    type: actionTypes.FETCH_DETAILS_SUCCEED,
    data: data,
    symbol: symbol
  }
};
