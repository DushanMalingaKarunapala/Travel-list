import { Header } from "./components/header";
import { Form } from "./components/form";
import { PackingList } from "./components/packing-list";
import { Status } from "./components/status";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); //lifted state from the form component to this app component: because this state needed to be used by two sibling components which is form component and packing list component

  const addItem = (item) => {
    //function to add new item to the items array

    setItems((items) => [...items, item]); // spread the items array and add a new object to it
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id)); //filter out the items which are not equal to the passed item's id
  };

  const togglecheckbox = (id) => {
    //function to update the item object's packed property to ture or false
    setItems((items) =>
      items.map(
        (item) => (item.id === id ? { ...item, packed: !item.packed } : item) //destructure the item object and update the packed property
      )
    ); //iterating through the items array and map the item object which is equal to passed id and raturning a new array with matched object's packed property to opposite of its current value:(which means if packed is false, the new array returning from this will have packed property as true)
  };

  const clearitems = () => {
    const confirmdeletion = window.confirm(
      "Are you sure want to delete items?"
    );

    if (confirmdeletion) setItems([]);
  };

  return (
    <div className="App">
      <Header />
      <Form onaddItem={addItem} />{" "}
      {/*pass the add item function as a prop to the form child component */}
      <PackingList
        items={items}
        ondeleteItem={deleteItem}
        ontogglecheckbox={togglecheckbox}
        onclearelements={clearitems}
      />{" "}
      {/*pass the items state to the packing list child component as a  prop */}
      <Status items={items} />
      {/*use items state as a derived satate to calculate the status */}
    </div>
  );
}

export default App;
