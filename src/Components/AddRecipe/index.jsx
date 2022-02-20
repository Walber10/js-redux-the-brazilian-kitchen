import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeList from "../RecipeList";
import { WrapperAddRecipe } from "./recipe.style";
import { addrecipe } from "../../Features/Recipe";

const AddRecipe = () => {
  const recipeList = useSelector((state) => state.recipes.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [ingredientsList, setIngredientsList] = useState([{ name: "panqueca", quantity: 2 },]);
  const [ingredient, setIngredient] = useState();
  const [quantit, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const handleClick = () => {
    setIngredientsList([
      ...ingredientsList,
      { name: ingredient, quantity: quantit },
    ]);
    setIngredient('')
    setQuantity(0)
  };

  const addRecipe = () => {
      dispatch(
        addrecipe({
          id: recipeList[recipeList.length - 1].id + 1,
          name,
          ingredient: ingredientsList,
          description,
        })
      );
      setName('');
      setIngredientsList([])
  }

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
            <input
            value={name}
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row ingredient_row">
        <div className="col-3">
          <label htmlFor="">Ingredient name</label> <br />
          <input
          value={ingredient}
            type="text"
            onChange={(event) => {
              setIngredient(event.target.value);
            }}
          />
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
          <button onClick={handleClick}>Add ingredient</button>
        </div>
      </div>

      <div className="row ingredient_row">
        <div className="col-4">
          <label htmlFor="">Ingredient List</label> <br />
          <div className="items_added">
            {ingredientsList.map((item) => (
              <ul>
                <li>
                  {item.name} - {item.quantity}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="col-5 how_cook">
          <label htmlFor="">How to cook</label> <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(event) => {
              setDescription(event.target.value);
              event.target.reset();
            }}
          ></textarea>
        </div>
      </div>
      <button
        onClick={addRecipe}
      >
        Add Recipe
      </button>
      <RecipeList />
    </WrapperAddRecipe>
  );
};

export default AddRecipe;
