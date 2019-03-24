import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  fullData: null,
  fetching: false,
  newFullData: false,
  symbol: null,
  fullName: null
}

const coinFullData = (state, action) => {
  return updateObject(state, {
    fullData: null,
    fetching: true,
    newFullData: false,
    symbol: null,
    fullName: null
  })
}

const coinFullDataSucceed = (state, action) => {
  return updateObject(state, {
    fullData: action.fullData,
    fetching: false,
    newFullData: true,
    symbol: action.symbol,
    fullName: action.fullName
  })
}

const coinFullDataFailed = (state, action) => {
  return updateObject(state, {
    fullData: false,
    fetching: false,
    newFullData: false,
    symbol: null,
    fullName: null
  })
}

const coinFullDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COIN_FULL_DATA: return coinFullData(state, action);
    case actionTypes.FETCH_COIN_FULL_DATA_SUCCEED: return coinFullDataSucceed(state, action);
    default: return state;
  }
}

export default coinFullDataReducer;
