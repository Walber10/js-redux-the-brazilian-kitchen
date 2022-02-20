import RecipeCard from "../RecipeCard";
import { WrapperRecipeList } from "./recipeList.style";
import React from "react";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const recipeList = useSelector((state) => state.recipes.valueRecipe);

  return (
    <WrapperRecipeList>
      <div className="row ingredient_list">
        <h1>Brazilian Kitchen recipes</h1>
        {recipeList.map((recipe) => (
          <RecipeCard title={recipe.name} description={recipe.description} />
        ))}
      </div>
    </WrapperRecipeList>
  );
};

export default RecipeList;
