/* eslint-disable max-len */
const SET_PAGE = 'SET_PAGE';
const SET_ERROR = 'SET_ERROR';
const SET_IS_LOADING = 'SET_IS_LOADING';

const SET_PAGE_ENDLESS_PAGINATION = 'SET_PAGE_ENDLESS_PAGINATION';
const SET_PAGE_CLEAN = 'SET_PAGE_CLEAN';

const SET_PAGE_FILTER = 'SET_PAGE_FILTER';

const defaultState = {
  info: {},
  results: [],
  isLoading: false,
  errors: [],
};

export default function mainReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_PAGE_FILTER:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_PAGE_CLEAN:
      return {
        ...state,
        info: {},
        results: [],
        errors: [],
        isLoading: false,
      };

    case SET_PAGE_ENDLESS_PAGINATION:
      return {
        ...state,
        info: action.payload.info,
        results: [...state.results, ...action.payload.results],
        isLoading: false,
      };

    case SET_PAGE:
      return {
        ...state,
        info: action.payload.info,
        results: action.payload.results,
        errors: [],
        isLoading: false,
      };

    case SET_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload],
        isLoading: false,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}

export const setPageMain = (payload) => ({ type: SET_PAGE, payload });
export const setErrorMain = (payload) => ({ type: SET_ERROR, payload });
export const setIsLoadingMain = (bool) => ({ type: SET_IS_LOADING, payload: bool });

export const setPageEndlessPagination = (payload) => ({ type: SET_PAGE_ENDLESS_PAGINATION, payload });
export const setPageClean = () => ({ type: SET_PAGE_CLEAN });

export const setPageMainFilter = (payload) => ({ type: SET_PAGE_FILTER, payload });
