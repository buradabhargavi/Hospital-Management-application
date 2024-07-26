import React from "react";

const ItemsConext = React.createContext({
  items: [],
  addItem: (id) => {},
  updateItem: (id) => {},
});

export default ItemsConext;
