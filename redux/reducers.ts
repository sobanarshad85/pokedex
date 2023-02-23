import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    loading: true,
    error: null,
    pageOffset: 0,
    pageLimit: 10,
    totalRecords: 0,
  },
  reducers: {
    setOffset: (state, action) => {
      return {
        ...state,
        pageOffset: action.payload,
      };
    },
    setPageLimit: (state, action) => {
      return {
        ...state,
        pageLimit: action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    addPokemons: (state, action) => {
      return {
        ...state,
        pokemons: action.payload.results,
        totalRecords: action.payload.count,
        loading: false,
        error: null,
      };
    },
  },
});

export const { addPokemons, setOffset, setLoading, setPageLimit } =
  pokeSlice.actions;

export default pokeSlice.reducer;
