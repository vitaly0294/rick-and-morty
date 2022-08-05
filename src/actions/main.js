import axios from "axios";
import { setPageMain, setErrorMain, setIsLoadingMain} from "../reducers/mainReducer";

export const getPageMain = (link, params = {}) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingMain(true));
      const response = await axios.get(link, {
        params: params
      });
      dispatch(setPageMain(response.data));
    } catch (error) {
      dispatch(setErrorMain(error));
    }
  }
}