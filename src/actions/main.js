import axios from 'axios';
import {
  setPageMain,
  setErrorMain,
  setIsLoadingMain,
} from '../reducers/mainReducer';

export const getPage = (link, params = {}, checkError = true) => async (dispatch) => {
  try {
    dispatch(setIsLoadingMain(true));
    const response = await axios.get(link, {
      params,
    });
    dispatch(setPageMain(response.data));
  } catch (error) {
    if (checkError) {
      dispatch(setErrorMain({
        ...error,
      }));
    } else {
      dispatch(setPageMain({
        info: {},
        results: [],
        isLoading: false,
        errors: [],
      }));
    }
  }
};

export default getPage;
