import * as actionTypes from './actionTypes';

// TOP VOLUME 24
export const fetchTopVolume24 = () => {
  return {
    type: actionTypes.FETCH_TOP_VOLUME_24
  }
}

export const fetchTopVolume24Succeed = (data) => {
  return {
    type: actionTypes.FETCH_TOP_VOLUME_24_SUCCEED,
    data: data
  }
}
