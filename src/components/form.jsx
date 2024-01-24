import React, { useState } from "react";

export const Form = ({ onaddItem }) => {
  //recieve the additem function from the app component
  const [descriptioninput, setDescriptionInput] = useState(""); //controlled state for form input
  const [selectedquantity, setselectedQuantity] = useState(1); //controlled state for select quantity input
  // const [items, setItems] = useState([]);

  // const addItem = (item) => {
  //   //function to add new item to the items array

  //   setItems((items) => [...items, item]); // spread the items array and add a new object to it
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descriptioninput) return; //if no  description input, do not create the object

    const newitem = {
      // create the object with the submitted data
      descriptioninput,
      selectedquantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newitem);

    onaddItem(newitem); // calling the add item function and pass the new object

    //reset the form input fields after submission
    setDescriptionInput("");
    setselectedQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={selectedquantity}
        onChange={(e) => setselectedQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option> //you can create list of numbers like this for options without creating multiple option elements
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Item Name"
        value={descriptioninput}
        onChange={(e) => setDescriptionInput(e.target.value)} //set the descriptiioninput state variable to the input value from the text input
      ></input>
      <button>Add</button>
    </form>
  );
};
