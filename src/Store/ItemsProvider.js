import React, { useState } from "react";
import ItemsConext from "./ItemsContext";
import axios from "axios";
import { useEffect } from "react";

const ItemsProvider = (props) => {
  const [items, setItems] = useState([]);
  // console.log(items);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/9c192425aa2c4c0895465196f2e43ce4/Items"
      );

      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = (item) => {
    try {
      axios.post(
        "https://crudcrud.com/api/9c192425aa2c4c0895465196f2e43ce4/Items",
        item
      );
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = (item) => {
    try {
      axios.put(
        "https://crudcrud.com/api/9c192425aa2c4c0895465196f2e43ce4/Items",
        item
      );
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const itemval = {
    items: items,
    updateItem: updateItem,
    addItem: addItem,
  };
  return (
    <ItemsConext.Provider value={itemval}>
      {props.children}
    </ItemsConext.Provider>
  );
};
export default ItemsProvider;
