import React from "react";
import { Items } from "./items";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
  { id: 4, description: "Earphone", quantity: 12, packed: false },
  { id: 5, description: "Speaker", quantity: 1, packed: true },
];

export const PackingList = ({ items }) => {
  //recieve the items state from the app.js as a prop
  return (
    <div className="list">
      <ul>
        {/* {initialItems.map((item) => (   before used initial items to render the initial list. but now below items new array which was created in app.js is used to change the state
          <Items item={item} key={item.id} />
        ))} */}
        {items.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="">Sort by input order</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
};
