import axios from "axios";
import { setPageCharacter, setLinkPageIdArrEpisodes, setCharactersListInCharacter, setErrorCharacterEpisodes, setErrorCharacterCharacter, setIsLoadingCharacter, setLocationCharacter} from "../reducers/characterReducer";
import { getDataIdArr, getDataId } from "../utils/pages";

export const getAllCharacter = (link, arrId) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingCharacter(true));
      const response = await axios.get(`${link}/${arrId}`);
      dispatch(setCharactersListInCharacter(response.data));
    } catch (error) {
      dispatch(setErrorCharacterCharacter(error));
    }
  }
}

export const getPageIdCharacter = (link, id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingCharacter(true));
      const response = await axios.get(`${link}/${id}`);
      console.log('response: ', response.data);
      dispatch(setPageCharacter(response.data));
      dispatch(setLocationCharacter({...response.data.location, ip: getDataId(response.data.location.url)}));
      dispatch(setLinkPageIdArrEpisodes(getDataIdArr(response.data.episode)));
    } catch (error) {
      dispatch(setErrorCharacterEpisodes(error));
    }
  }
}
