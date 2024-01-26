import React from "react";

export const Status = ({ items }) => {
  const totalitems = items.length;
  const packeditems = items.filter((item) => item.packed).length; //get the length of the new array where the items that are already packed
  const percentage = Math.round((packeditems / totalitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are packed all your items and you are ready to go"
          : ` You have ${totalitems} items in your list and you have packed 
            ${packeditems} ( ${percentage}%)`}
      </em>
    </footer>
  );
};
