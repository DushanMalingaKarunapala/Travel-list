import { Header } from "./components/header";
import { Form } from "./components/form";
import { PackingList } from "./components/packing-list";
import { Status } from "./components/status";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

export default App;
