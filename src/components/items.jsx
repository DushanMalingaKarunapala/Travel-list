import React from "react";

export const Items = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {/*if the item is packed = true then apply line-through style*/}
        {item.descriptioninput} {item.selectedquantity}
      </span>
      <button>❌</button>
    </li>
  );
};
