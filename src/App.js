import { Header } from "./components/header";
import { Form } from "./components/form";
import { PackingList } from "./components/packing-list";
import { Status } from "./components/status";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    //function to add new item to the items array

    setItems((items) => [...items, item]); // spread the items array and add a new object to it
  };

  return (
    <div className="App">
      <Header />
      <Form onaddItem={addItem} />{" "}
      {/*pass the add item function as a prop to the form component */}
      <PackingList items={items} />{" "}
      {/*pass the items state to the packing list prop */}
      <Status />
    </div>
  );
}

export default App;
