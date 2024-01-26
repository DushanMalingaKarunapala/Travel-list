import React from "react";

export const Items = ({ item, ondeleteItem, ontogglecheckbox }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => ontogglecheckbox(item.id)} //call the ontogglecheckboc function and pass the clicked item's id
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {/*if the item is packed = true then apply line-through style*/}
        {item.descriptioninput} {item.selectedquantity}
      </span>
      <button onClick={() => ondeleteItem(item.id)}>❌</button>{" "}
      {/*pass the id of the clicked item to the ondeleteitem function when this button is clicked */}
    </li>
  );
};
