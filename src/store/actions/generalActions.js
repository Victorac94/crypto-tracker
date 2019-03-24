import * as actionTypes from './actionTypes';

// FAILED FETCHING TOP COINS
export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  }
}

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR
  }
}

// GET DOCUMENT SCROLL POSITION
export const saveScrollPosition = scroll => {
  return {
    type: actionTypes.SAVE_SCROLL_POSITION,
    scroll: scroll
  }
}
