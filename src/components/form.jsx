import React from "react";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option> //you can create list of numbers like this for options without creating multiple option elements
        ))}
      </select>
      <input placeholder="Enter Item Name"></input>
      <button>Add</button>
    </form>
  );
};
