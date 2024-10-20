import { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStoredCart } from "./Utilites/Localstorage";

const Bottles = () => {
  const [bottles, SetBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => SetBottles(data));
  }, []);

  // load cart from localStorage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
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
