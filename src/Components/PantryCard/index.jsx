import { useState } from "react";
import { WrapperPantry } from "./pantry.style";

const PantryCard = ({name, quantity}) => {
  const [quantit, setQuantity] = useState(0);

  const increateQuantity = () => {
    setQuantity(quantit + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantit - 1);
  };



  return (
    <WrapperPantry>
      <div className="pantry_card text-center">
        <h4>{name}</h4>
      </div>
      <div className="card_foorter d-flex justify-content-between">
        <i className="fas fa-minus" onClick={decreaseQuantity}></i>
        <p>{quantity}</p>
        <i className="fas fa-plus" onClick={increateQuantity}></i>
      </div>
      </WrapperPantry>
  );
};

export default PantryCard;
