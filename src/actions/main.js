import axios from 'axios';
import {
  setPageMain,
  setErrorMain,
  setIsLoadingMain,
  setPageMainFilter,
} from '../reducers/mainReducer';

export const getPageMain = (link, params = {}) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageMain(response.data));
  } catch (error) {
    console.log(error);
    dispatch(setErrorMain({
      ...error,
    }));
  }
};

export const getPageMainFilter = (link, params = {}) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageMain(response.data));
  } catch (error) {
    dispatch(setPageMainFilter(false));
  }
};
