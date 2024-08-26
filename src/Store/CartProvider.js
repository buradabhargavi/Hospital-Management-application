import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";

function CartProvider(props) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/cart"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    const { _id: id, medicineName, description, price, quantity } = item;
    try {
      await axios.post(
        "https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/cart",
        { id, medicineName, description, price, quantity }
      );
      await fetchItems();
    } catch (error) {
      console.error("Error adding cart item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(
        `https://crudcrud.com/api/089a17588e434b9ba4dfbec75b7aa99b/cart/${id}`
      );
      await fetchItems();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const cartVal = {
    items,
    addItem,
    deleteItem,
  };

  return (
    <CartContext.Provider value={cartVal}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
