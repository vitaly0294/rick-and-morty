const SET_PAGE_LOCATION = 'SET_PAGE_LOCATION';
const SET_LINK_PAGE_ARR_LOCATION = 'SET_LINK_PAGE_ARR_LOCATION';
const SET_CHARACTERS_LIST_IN_LOCATION = 'SET_CHARACTERS_LIST_IN_LOCATION';

const SET_ERROR_LOCATION_LOCATION = 'SET_ERROR_LOCATION_LOCATION';
const SET_ERROR_LOCATION_CHARACTERS = 'SET_ERROR_LOCATION_CHARACTERS';
const SET_IS_LOADING_LOCATION = 'SET_IS_LOADING_LOCATION';

const defaultState = {
  location: {},
  characters: [],
  linkPageIdArr: [],
  isLoading: false,
  errorEpisode: null,
  errorCharacters: null,
};

export default function locationReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE_LOCATION:
      return {
        ...state,
        episode: action.payload,
        isLoading: false
      }

    case SET_LINK_PAGE_ARR_LOCATION:
      return {
        ...state,
        linkPageIdArr: action.payload,
      }

    case SET_CHARACTERS_LIST_IN_LOCATION:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      }

    case SET_ERROR_LOCATION_LOCATION:
      return {
        ...state,
        errorCharacters: action.payload,
        isLoading: false
      }

    case SET_ERROR_LOCATION_CHARACTERS:
      return {
        ...state,
        errorEpisode: action.payload,
        isLoading: false
      }

    case SET_IS_LOADING_LOCATION:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
}

export const setPageLocation = (payload) => ({type: SET_PAGE_LOCATION, payload: payload});
export const setLinkPageIdArrCharacters = (payload) => ({type: SET_LINK_PAGE_ARR_LOCATION, payload: payload});
export const setCharactersListInLocation = (payload) => ({type: SET_CHARACTERS_LIST_IN_LOCATION, payload: payload});
export const setErrorLocationEpisode = (payload) => ({type: SET_ERROR_LOCATION_LOCATION, payload: payload});
export const setErrorLocationCharacters = (payload) => ({type: SET_ERROR_LOCATION_CHARACTERS, payload: payload});
export const setIsLoadingLocation = (bool) => ({type: SET_IS_LOADING_LOCATION, payload: bool});