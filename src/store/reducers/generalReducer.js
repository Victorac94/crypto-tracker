import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  scroll: 0
};

// FETCHING DATA FAILED
const fetchFailed = (state, action) => {
  return updateObject(state, {error: action.error});
};

// GET DOCUMENT SCROLL POSITION
const saveScrollPosition = (state, action) => {
  return updateObject(state, {scroll: action.scroll})
}

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FAILED: return fetchFailed(state, action);
    case actionTypes.SAVE_SCROLL_POSITION: return saveScrollPosition(state, action);
    default: return state;
  }
};

export default generalReducer;
