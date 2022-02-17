import React, { useState } from "react";
import RecipeList from "../RecipeList";
import { WrapperAddRecipe } from "./recipe.style";

const AddRecipe = ({ recipesArray }) => {

  const [quantit, setQuantity] = useState(0);

  const increateQuantity = () => {
    setQuantity(quantit + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantit - 1);
  };


  return (
    <WrapperAddRecipe>
      <div className="row ">
        <div className="col-12">
        <label htmlFor="" className="font-weight-bold">
          Recipe name
        </label>
        </div>
        <div className="row">
          <div className="col-12">
          <input type="text" />
          </div>
        </div>
      </div>

      <div className="row ingredient_row">
        <div className="col-3">
        <label htmlFor="">Ingredient name</label> <br />
        <input type="text" />
        </div>
        <div className="col-1">
          <label htmlFor="" className="d-flex flex-column text-center">
            quantity: <span className="text-center">{quantit}</span>
          </label>
        </div>
        <div className="col-1 d-flex flex-column icons_container">
        <i className="fas fa-minus" onClick={decreaseQuantity}></i>
          <i className="fas fa-plus" onClick={increateQuantity}></i>
        </div>
        <div className="col-3">
          <button >Add ingredient</button>
        </div>
      </div>

      <div className="row ingredient_row">
        <div className="col-4">
        <label htmlFor="">Ingredient List</label> <br />
        <div className="items_added">
          <ul>
            <li>aqui</li>
          </ul>
        </div>
        </div>
        <div className="col-5 how_cook">
        <label htmlFor="">How to cook</label> <br />
        <textarea name="" id="" cols="30" rows="10">
        </textarea>
        </div>
      </div>
      <button >Add ingredient</button>
    <RecipeList />
    </WrapperAddRecipe>
  );
};

export default AddRecipe;
