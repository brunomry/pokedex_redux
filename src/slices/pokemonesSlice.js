import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemones: [],
  status: null,
  error: null,
  pokemon: {},
  tipos: [],
};

export const obtenerPokemones = createAsyncThunk(
  "/pokemones/obtenerPokemones",
  async () => {
    const respuesta = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );

    const lista = respuesta.data.results.map((p) =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
    );

    const data = await Promise.all(lista);
    const pokemones = data.map((pokemon) => pokemon.data);
    return pokemones;
  }
);

export const obtenerTipos = createAsyncThunk(
  "pokemones/obtenerTipos",
  async () => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/type`);
    return respuesta.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtenerPokemones.pending, (state) => {
        state.status = "Cargando";
      })
      .addCase(obtenerPokemones.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.pokemones = action.payload;
      })
      .addCase(obtenerPokemones.rejected, (state, action) => {
        state.status = "Rechazado";
        state.error = action.error.message;
      })
      .addCase(obtenerTipos.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.tipos = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
