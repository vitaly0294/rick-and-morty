import axios from 'axios';
import {
  setPageMain,
  setErrorMain,
  setIsLoadingMain,
  setPageMainFilter,
  setPageEndlessPagination,
} from '../reducers/mainReducer';

export const getPage = (link, params = {}) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageMain(response.data));
  } catch (error) {
    dispatch(setErrorMain({
      ...error,
    }));
  }
};

export const getPageMain = (link, params = {}) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageMain(response.data));
  } catch (error) {
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

export const getPageMainPag = (link, params = {}) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageEndlessPagination(response.data));
  } catch (error) {
    dispatch(setErrorMain({
      ...error,
    }));
  }
};
