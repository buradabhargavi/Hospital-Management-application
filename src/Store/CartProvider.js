import React from "react";
import CartContext from "./CartContext";
import axios from "axios";

function CartProvider(props) {
  const addItem = async (item) => {
    try {
      const res = await axios.post(
        "https://crudcrud.com/api/9c192425aa2c4c0895465196f2e43ce4/cart",
        item
      );

      //  console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(
        `https://crudcrud.com/Dashboard/9c192425aa2c4c0895465196f2e43ce4/cart/${id}`
      );
      //  console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const cartVal = {
    addItem: addItem,
    deleteItem: deleteItem,
  };
  return (
    <CartContext.Provider value={cartVal}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
