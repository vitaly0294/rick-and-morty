/* eslint-disable max-len */
import axios from 'axios';
import {
  setPageLocation, setLinkPageIdArrCharacters, setCharactersListInLocation, setErrorLocationEpisode, setErrorLocationCharacters, setIsLoadingLocation,
} from '../reducers/locationReducer';
import { getDataIdArr } from '../utils/pages';

export const getAllLocation = (link, arrId) => async (dispatch) => {
  try {
    dispatch(setIsLoadingLocation(true));
    const response = await axios.get(`${link}/${arrId}`);
    dispatch(setCharactersListInLocation(response.data));
  } catch (error) {
    dispatch(setErrorLocationCharacters(error));
  }
};

export const getPageIdLocation = (link, id) => async (dispatch) => {
  try {
    dispatch(setIsLoadingLocation(true));
    const response = await axios.get(`${link}/${id}`);
    dispatch(setPageLocation(response.data));
    dispatch(setLinkPageIdArrCharacters(getDataIdArr(response.data.residents)));
  } catch (error) {
    dispatch(setErrorLocationEpisode(error));
  }
};
