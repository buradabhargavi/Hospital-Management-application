import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

function Cart({ onClose }) {
  const { items } = useContext(CartContext);
  console.log("items", items);
  return (
    <Modal onClose={onClose}>
      <h1>Your cart</h1>
      {items.map((item) => {
        return <CartItem key={item._id} item={item}></CartItem>;
      })}
    </Modal>
  );
}

export default Cart;
