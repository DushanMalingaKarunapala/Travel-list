import React, { useState } from "react";
import { Items } from "./items";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
//   { id: 4, description: "Earphone", quantity: 12, packed: false },
//   { id: 5, description: "Speaker", quantity: 1, packed: true },
// ];

export const PackingList = ({
  items,
  ondeleteItem,
  ontogglecheckbox,
  onclearelements,
}) => {
  //recieve the items state from the app.js as a prop

  const [sortby, setsortBy] = useState("input"); //state for sorting state

  let sorteditems; //add sorted elements  to this new derived state variable using recieved items state array and use that state to sort items

  if (sortby === "input") sorteditems = items; //default sorting

  if (sortby === "description")
    //sort by description
    sorteditems = items
      .slice()
      .sort((a, b) => a.descriptioninput.localeCompare(b.descriptioninput));

  if (sortby === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* {initialItems.map((item) => (   before used initial items to render the initial list. but now below items new array which was created in app.js is used to change the state
          <Items item={item} key={item.id} />
        ))} */}
        {sorteditems.map((item) => (
          <Items
            item={item}
            key={item.id}
            ondeleteItem={ondeleteItem}
            ontogglecheckbox={ontogglecheckbox}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onclearelements}>Clear List</button>
      </div>
    </div>
  );
};
