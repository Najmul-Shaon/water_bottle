import { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, SetBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => SetBottles(data));
  }, []);
  return (
    <div>
      <h3>Bottoles Here:{bottles.length}</h3>
      <div className="bottle_container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
