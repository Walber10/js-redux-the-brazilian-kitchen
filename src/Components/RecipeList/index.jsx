import RecipeCard from "../RecipeCard";
import { WrapperRecipeList } from "./recipeList.style";
import React from "react";

const RecipeList = ({ meuArray }) => {
  const recipes = [
    {
      id: "1",
      name: "coxinha",
      ingredients: { name: "banana", quantity: "2" },
      description: "mixed everything ",
    },

    {
      id: "2",
      name: "lasanha",
      ingredients: { name: "sal", quantity: "2" },
      description: "mixed everything ",
    },

    {
      id: "3",
      name: "pastel",
      ingredients: { name: "banada", quantity: "2" },
      description: "mixed everything ",
    },
    {
      id: "1",
      name: "coxinha",
      ingredients: { name: "banana", quantity: "2" },
      description: "mixed everything ",
    },

    {
      id: "2",
      name: "lasanha",
      ingredients: { name: "sal", quantity: "2" },
      description: "mixed everything ",
    },

    {
      id: "3",
      name: "pastel",
      ingredients: { name: "banada", quantity: "2" },
      description: "mixed everything ",
    },
  ];
  return (
    <WrapperRecipeList>
    <div className="row ingredient_list">
        <h1>Brazilian Kitchen recipes</h1>
        {recipes.map( (recipe) => (
        <RecipeCard title={recipe.name} description={recipe.description}/>
        ) )}
    </div>
    </WrapperRecipeList>
  )
}

export default RecipeList;
