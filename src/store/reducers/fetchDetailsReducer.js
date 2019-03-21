import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  symbol: null,
  details: null,
  newDetails: false
};

// FETCHING DETAILS
const fetchDetails = (state, action) => {
  return updateObject(state, {symbol: null, details: null, newDetails: false})
};

// FETCHING DETAILS SUCCEED
const fetchDetailsSucceed = (state, action) => {
  return updateObject(state, {symbol: action.symbol, details: action.data, newDetails: true})
};

const fetchDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAILS: return fetchDetails(state, action);
    case actionTypes.FETCH_DETAILS_SUCCEED: return fetchDetailsSucceed(state, action);
    default: return state;
  }
};

export default fetchDetailsReducer;
