import React from "react";

const CartContext = React.createContext({
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default CartContext;
