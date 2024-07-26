import React, { useContext } from "react";
import ItemsConext from "../Store/ItemsContext";
import DisplayItem from "./DisplayItem";

function DisplayData() {
  const ctx = useContext(ItemsConext);
  const items = ctx.items;
  // console.log(ctx.items);

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {items.map((item) => {
          return <DisplayItem item={item} />;
        })}
      </ul>
    </div>
  );
}

export default DisplayData;
