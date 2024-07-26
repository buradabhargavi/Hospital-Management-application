import "./App.css";
import AddItem from "./Components/AddItem";
import DisplayData from "./Components/DisplayData";
import Header from "./Components/Header";
import CartProvider from "./Store/CartProvider";
import ItemsProvider from "./Store/ItemsProvider";

function App() {
  return (
    <ItemsProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <AddItem />
          <DisplayData />
        </div>
      </CartProvider>
    </ItemsProvider>
  );
}

export default App;
