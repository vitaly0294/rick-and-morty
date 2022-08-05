const SET_PAGE_CHARACTER = 'SET_PAGE_CHARACTER';
const SET_LINK_PAGE_ARR_CHARACTER = 'SET_LINK_PAGE_ARR_CHARACTER';
const SET_EPISODES_LIST_IN_CHARACTER = 'SET_EPISODES_LIST_IN_CHARACTER';

const SET_ERROR_CHARACTER_EPISODES = 'SET_ERROR_CHARACTER_EPISODES';
const SET_ERROR_CHARACTER_CHARACTER = 'SET_ERROR_CHARACTER_CHARACTER';
const SET_IS_LOADING_CHARACTER = 'SET_IS_LOADING_CHARACTER';

const SET_LOCATION_CHARACTER = 'SET_LOCATION_CHARACTER';

const defaultState = {
  location: null,
  episodes: [],
  character: {},
  linkPageIdArr: [],
  isLoading: true,
  errorEpisodes: null,
  errorCharacter: null,
};

export default function characterReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE_CHARACTER:
      return {
        ...state,
        character: action.payload,
        isLoading: false
      }

    case SET_LINK_PAGE_ARR_CHARACTER:
      return {
        ...state,
        linkPageIdArr: action.payload,
      }

    case SET_EPISODES_LIST_IN_CHARACTER:
      return {
        ...state,
        episodes: action.payload,
        isLoading: false,
      }

    case SET_ERROR_CHARACTER_EPISODES:
      return {
        ...state,
        errorCharacter: action.payload,
        isLoading: false
      }

    case SET_ERROR_CHARACTER_CHARACTER:
      return {
        ...state,
        errorEpisodes: action.payload,
        isLoading: false
      }

    case SET_IS_LOADING_CHARACTER:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_LOCATION_CHARACTER:
      return {
        ...state,
        location: action.payload
      }

    default:
      return state;
  }
}

export const setPageCharacter = (payload) => ({type: SET_PAGE_CHARACTER, payload: payload});
export const setLinkPageIdArrEpisodes = (payload) => ({type: SET_LINK_PAGE_ARR_CHARACTER, payload: payload});
export const setCharactersListInCharacter = (payload) => ({type: SET_EPISODES_LIST_IN_CHARACTER, payload: payload});
export const setErrorCharacterEpisodes = (payload) => ({type: SET_ERROR_CHARACTER_EPISODES, payload: payload});
export const setErrorCharacterCharacter = (payload) => ({type: SET_ERROR_CHARACTER_CHARACTER, payload: payload});
export const setIsLoadingCharacter = (bool) => ({type: SET_IS_LOADING_CHARACTER, payload: bool});

export const setLocationCharacter = (payload) => ({type: SET_LOCATION_CHARACTER, payload: payload});