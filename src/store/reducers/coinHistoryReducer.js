import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  fetching: false,
  symbol: null,
  history: null,
  newHistory: false
};

// FETCHING COIN HISTORY
const fetchCoinHistory = (state, action) => {
  return updateObject(state, {fetching: true, symbol: null, history: null, newHistory: false})
};

// FETCHING DETAILS SUCCEED
const fetchCoinHistorySucceed = (state, action) => {
  return updateObject(state, {fetching: false, symbol: action.symbol, history: action.data, newHistory: true})
};

const coinHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COIN_HISTORY_DAY: return fetchCoinHistory(state, action);
    case actionTypes.FETCH_COIN_HISTORY_DAY_SUCCEED: return fetchCoinHistorySucceed(state, action);
    default: return state;
  }
};

export default coinHistoryReducer;
