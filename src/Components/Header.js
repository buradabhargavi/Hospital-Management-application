import React from "react";

function Header({ onShowCart }) {
  return (
    <div>
      <button onClick={onShowCart}>Cart</button>
    </div>
  );
}

export default Header;
