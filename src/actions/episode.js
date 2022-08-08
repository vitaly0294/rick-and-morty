/* eslint-disable max-len */
import axios from 'axios';
import {
  setPageEpisode, setLinkPageIdArrCharacters, setCharactersListInEpisode, setIsLoadingEpisode, setErrorEpisodeEpisode, setErrorEpisodeCharacters,
} from '../reducers/episodeReducer';
import { getDataIdArr } from '../utils/pages';

export const getAllEpisode = (link, arrId) => async (dispatch) => {
  try {
    dispatch(setIsLoadingEpisode(true));
    const response = await axios.get(`${link}/${arrId}`);
    dispatch(setCharactersListInEpisode(response.data));
  } catch (error) {
    dispatch(setErrorEpisodeCharacters(error));
  }
};

export const getPageIdEpisode = (link, id) => async (dispatch) => {
  try {
    dispatch(setIsLoadingEpisode(true));
    const response = await axios.get(`${link}/${id}`);
    dispatch(setPageEpisode(response.data));
    dispatch(setLinkPageIdArrCharacters(getDataIdArr(response.data.characters)));
  } catch (error) {
    dispatch(setErrorEpisodeEpisode(error));
  }
};
