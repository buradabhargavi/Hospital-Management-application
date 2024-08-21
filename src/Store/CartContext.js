import React from "react";

const CartContext = React.createContext({
  addItem: (item) => {},
  deleteItem: (id) => {},
  items: [],
});

export default CartContext;
