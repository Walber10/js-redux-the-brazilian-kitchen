import PantryCard from "../../Components/PantryCard/index";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../../Features/Recipe";
import { itemsInPantry } from "../../Components/ShareData/PantryData";
import { WrapperAddRecipe } from "../../Components/AddRecipe/recipe.style";
import "../Pantry/pantry.css";

const Pantry = () => {
  const itemsIngredient = useSelector((state) => state.recipes.valuePantry);

  const Items = ({ currentItems }) => {
    const [quantit, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const [newIngredient, setNewIngredient] = useState({
      name: "",
      quantity: 0,
    });

    const increateQuantity = () => {
      console.log('wae')
      setQuantity(quantit + 1);
    };
  
    const decreaseQuantity = () => {
      setQuantity(quantit - 1);
    };

    const AddIngredient = () => {
      dispatch(
        addIngredient({
          id: itemsInPantry[itemsInPantry.length - 1].id + 1,
          name: newIngredient.name,
          quantity: newIngredient.quantity,
        })
      );
    };

    const handleClick = () => {
      setNewIngredient([{ name: newIngredient.name, quantity: newIngredient.quantity }]);
      setNewIngredient("");
      setQuantity(0);
      AddIngredient();
    };

    return (
      <WrapperAddRecipe>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row ingredient_row">
                <div className="col-3">
                  <label htmlFor="">Ingredient name</label> <br />
                  <input
                    type="text"
                    onChange={(event) => {
                      setNewIngredient({ name: event.target.value });
                    }}
                  />
                </div>
                <div className="col-1">
                  <label htmlFor="" className="d-flex flex-column text-center">
                    quantity:
                    <span className="text-center">
                      {newIngredient.quantity}
                    </span>
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
            </div>
          </div>
          <div className="row pantry_card">
            {currentItems &&
              currentItems.map((item) => (
                <div className="col-2">
                  <PantryCard
                    // increateQuantity={}
                    // decreaseQuantity={}
                    key={item}
                    name={item.name}
                    quantity={item.quantity}
                  />
                </div>
              ))}
          </div>
        </div>
      </WrapperAddRecipe>
    );
  };

  //cards pagination
  const PaginatedItems = ({ itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(itemsIngredient.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(itemsIngredient.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset =
        (event.selected * itemsPerPage) % itemsIngredient.length;
      setItemOffset(newOffset);
    };
    return (
      <div className="container  ">
        <Items currentItems={currentItems} />
        <div className="change_page d-flex justify-content-center ">
          <ReactPaginate
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <PaginatedItems itemsPerPage={6} />,
    </>
  );
};

export default Pantry;
