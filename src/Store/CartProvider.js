import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";

function CartProvider(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/cart"
      );
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addItem = (item) => {
    const { _id: id, medicineName, description, price, quantity } = item;
    try {
      axios.post(
        "https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/cart",
        { id, medicineName, description, price, quantity }
      );
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (id) => {
    try {
      axios.delete(
        `https://crudcrud.com/api/5f1f02359bd247839b4c2761cb0c4501/cart/${id}`
      );
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const cartVal = {
    items: items,
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
