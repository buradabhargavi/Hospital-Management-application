import React, { useContext } from "react";
import CartContext from "../Store/CartContext";

function DisplayItem({ item }) {
  // const{medicineName}   = items
  const cartctx = useContext(CartContext);

  function handleAdd() {
    // console.log("add item");
    // console.log(cartctx.addItem(item));
    cartctx.addItem(item);
  }
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <p>{item.medicineName}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default DisplayItem;
