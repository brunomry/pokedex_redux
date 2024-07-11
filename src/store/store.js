import { configureStore } from "@reduxjs/toolkit";
import pokemonesSlice from "../slices/pokemonesSlice";

export const store = configureStore({
    reducer: {
        pokemones: pokemonesSlice
    }
}
)