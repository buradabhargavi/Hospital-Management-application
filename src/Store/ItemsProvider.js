import React, { useState, useEffect } from "react";
import ItemsContext from "./ItemsContext";
import axios from "axios";

const ItemsProvider = (props) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/Items"
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
        "https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/Items",
        item
      );
      fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const updateItem = async (item) => {
    try {
      await axios.put(
        `https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/Items/${item._id}`,
        item
      );
      fetchItems();
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
