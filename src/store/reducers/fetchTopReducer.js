import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  coins: null
};

// TOP VOLUME 24h
const fetchTopVolume24Succeed = (state, action) => {
  return updateObject(state, {coins: action.data})
};

const fetchTopReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_TOP_VOLUME_24_SUCCEED: return fetchTopVolume24Succeed(state, action);
    default: return state;
  }
};

export default fetchTopReducer;
