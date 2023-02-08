import {
  ADD_POKEMONS,
  SET_LOADING,
  SET_OFFSET,
  SET_PAGE_LIMIT,
} from "../contants";

const initialState = {
  pokemons: [],
  loading: true,
  error: null,
  pageOffset: 0,
  pageLimit: 10,
  totalRecords: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return {
        ...state,
        pageOffset: action.payload,
      };
    case SET_PAGE_LIMIT:
      return {
        ...state,
        pageLimit: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.results,
        totalRecords: action.payload.count,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
