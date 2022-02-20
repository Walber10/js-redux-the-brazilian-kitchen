import { createSlice } from "@reduxjs/toolkit";
import { RecipeListing } from "../Components/ShareData/index";
import { itemsInPantry } from "../Components/ShareData/PantryData";

export const recipeSlice = createSlice({
  name: "kitchen",
  initialState: { valueRecipe: RecipeListing, valuePantry: itemsInPantry },
  reducers: {
    addrecipe: (state, action) => {
      state.valueRecipe.push(action.payload);
    },

    addIngredient: (state, action) => {
      state.valuePantry.push(action.payload);
    },

    deleterecipe: (state, action) => {
      state.valueRecipe = state.valueRecipe.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },

  },
});


export const { addrecipe, deleterecipe, updaterecipename, addIngredient } =
  recipeSlice.actions;
export default recipeSlice.reducer;
