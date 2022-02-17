import { createSlice } from "@reduxjs/toolkit";

import { RecipeListing } from "../Components/ShareData/index";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: { value: RecipeListing },
  reducers: {
    addrecipe: (state, action) => {
      state.value.push(action.payload);
    },

    deleterecipe: (state, action) => {
      state.value = state.value.filter((recipe) => recipe.id !== action.payload.id);
    },

    updaterecipename: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.value.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.recipename = action.payload.recipename;
        }
      });
    },
  },
});

export const { addrecipe, deleterecipe, updaterecipename } = recipeSlice.actions;
export default recipeSlice.reducer;
