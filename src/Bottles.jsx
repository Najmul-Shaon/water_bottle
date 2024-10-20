import { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, SetBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => SetBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // console.log(bottle);
  };

  return (
    <div>
      <h3>Bottoles Available:{bottles.length}</h3>
      <p>Cart: {cart.length}</p>
      <div className="bottle_container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
