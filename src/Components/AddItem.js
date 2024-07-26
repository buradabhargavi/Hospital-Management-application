import React, { useContext, useState } from "react";
import ItemsConext from "../Store/ItemsContext";

function AddItem() {
  const ctx = useContext(ItemsConext);
  // console.log(ctx);
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    ctx.addItem({ medicineName, description, price, quantity });
    // console.log("add the items");
    // console.log(medicineName, description, price, quantity);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="medicine">Medicine Name:</label>
        <input
          type="text"
          id="medicine"
          value={medicineName}
          placeholder="Enter medicine Name"
          onChange={(e) => setMedicineName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="Desctiption">Description:</label>
        <input
          type="text"
          id="Description"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="quantity">Quantity available:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          placeholder="Enter Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>
      <button>Add to list</button>
    </form>
  );
}

export default AddItem;
