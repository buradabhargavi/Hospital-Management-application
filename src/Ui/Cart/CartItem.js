import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";

function CartItem({ item }) {
  const { deleteItem } = useContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>{item.medicineName}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      <p>{item.description}</p>
      <p>{item._id}</p>
      <button onClick={() => deleteItem(item._id)}>Delete</button>
    </div>
  );
}

export default CartItem;
