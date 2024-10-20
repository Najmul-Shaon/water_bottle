import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./Bottles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;
