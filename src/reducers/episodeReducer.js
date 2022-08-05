const SET_PAGE_EPISODE = 'SET_PAGE_EPISODE';
const SET_LINK_PAGE_ARR_EPISODE = 'SET_LINK_PAGE_ARR_EPISODE';
const SET_CHARACTERS_LIST_IN_EPISODE = 'SET_CHARACTERS_LIST_IN_EPISODE';

const SET_ERROR_EPISODE_EPISODE = 'SET_ERROR_EPISODE_EPISODE';
const SET_ERROR_EPISODE_CHARACTERS = 'SET_ERROR_EPISODE_CHARACTERS';
const SET_IS_LOADING_EPISODE = 'SET_IS_LOADING_EPISODE';

const defaultState = {
  episode: {},
  characters: [],
  linkPageIdArr: [],
  isLoading: false,
  errorEpisode: null,
  errorCharacters: null,
};

export default function episodeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE_EPISODE:
      return {
        ...state,
        episode: action.payload,
        isLoading: false
      }

    case SET_LINK_PAGE_ARR_EPISODE:
      return {
        ...state,
        linkPageIdArr: action.payload,
      }

    case SET_CHARACTERS_LIST_IN_EPISODE:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      }

    case SET_ERROR_EPISODE_CHARACTERS:
      return {
        ...state,
        errorCharacters: action.payload,
        isLoading: false
      }

    case SET_ERROR_EPISODE_EPISODE:
      return {
        ...state,
        errorEpisode: action.payload,
        isLoading: false
      }

    case SET_IS_LOADING_EPISODE:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
}

export const setPageEpisode = (payload) => ({type: SET_PAGE_EPISODE, payload: payload});
export const setLinkPageIdArrCharacters = (payload) => ({type: SET_LINK_PAGE_ARR_EPISODE, payload: payload});
export const setCharactersListInEpisode = (payload) => ({type: SET_CHARACTERS_LIST_IN_EPISODE, payload: payload});
export const setErrorEpisodeEpisode = (payload) => ({type: SET_ERROR_EPISODE_EPISODE, payload: payload});
export const setErrorEpisodeCharacters = (payload) => ({type: SET_ERROR_EPISODE_CHARACTERS, payload: payload});
export const setIsLoadingEpisode = (bool) => ({type: SET_IS_LOADING_EPISODE, payload: bool});