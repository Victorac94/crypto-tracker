import * as actionTypes from './actionTypes';

// FAILED FETCHING TOP COINS
export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  }
}

// GET DOCUMENT SCROLL POSITION
export const saveScrollPosition = scroll => {
  return {
    type: actionTypes.SAVE_SCROLL_POSITION,
    scroll: scroll
  }
}
