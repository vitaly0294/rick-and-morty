const SET_PAGE = 'SET_PAGE';
const SET_ERROR = 'SET_ERROR';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_PAGE_FILTER = 'SET_PAGE_FILTER';

const defaultState = {
  info: {},
  results: [],
  isLoading: false,
  error: null
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE_FILTER:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_PAGE:
      return {
        ...state,
        info: action.payload.info,
        results: action.payload.results,
        isLoading: false
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

      case SET_IS_LOADING:
        return {
          ...state,
          isLoading: action.payload
        }

    default:
      return state;
  }
}

export const setPageMain = (payload) => ({type: SET_PAGE, payload: payload});
export const setErrorMain = (payload) => ({type: SET_ERROR, payload: payload});
export const setIsLoadingMain = (bool) => ({type: SET_IS_LOADING, payload: bool});

export const setPageMainFilter = (payload) => ({type: SET_PAGE_FILTER, payload: payload});