import { useState } from "react";
import "./App.css";
import AddItem from "./Components/AddItem";
import DisplayData from "./Components/DisplayData";
import Header from "./Components/Header";
import CartProvider from "./Store/CartProvider";
import ItemsProvider from "./Store/ItemsProvider";
import Cart from "./Ui/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
    console.log("first");
  };

  return (
    <ItemsProvider>
      <CartProvider>
        <div className="App">
          <Header onShowCart={openCartHandler} />
          {showCart && <Cart onClose={closeCartHandler}></Cart>}
          <AddItem />
          <DisplayData />
        </div>
      </CartProvider>
    </ItemsProvider>
  );
}

export default App;
