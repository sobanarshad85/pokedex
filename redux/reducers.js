import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
  name: "pokemon",
  initialState: { pokemons: [], loading: true, error: null },
  reducers: {
    addPokemons: (state, action) => {
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { addPokemons } = pokeSlice.actions;

export default pokeSlice.reducer;
