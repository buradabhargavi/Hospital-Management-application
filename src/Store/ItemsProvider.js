import React, { useState, useEffect } from "react";
import ItemsContext from "./ItemsContext";
import axios from "axios";

const ItemsProvider = (props) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/Items"
      );
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    try {
      await axios.post(
        "https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/Items",
        item
      );
      await fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const updateItem = async (item) => {
    try {
      await axios.put(
        `https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/Items/${item._id}`,
        item
      );
      await fetchItems();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const itemval = {
    items,
    updateItem,
    addItem,
  };

  return (
    <ItemsContext.Provider value={itemval}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
