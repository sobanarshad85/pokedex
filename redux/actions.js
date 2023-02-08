import {
  ADD_POKEMONS,
  SET_LOADING,
  SET_OFFSET,
  SET_PAGE_LIMIT,
} from "../contants";

export const addPokemons = (payload) => ({
  type: ADD_POKEMONS,
  payload,
});
export const setOffset = (payload) => ({
  type: SET_OFFSET,
  payload,
});
export const setPageLimit = (payload) => ({
  type: SET_PAGE_LIMIT,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
