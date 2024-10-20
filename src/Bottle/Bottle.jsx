import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { id, name, img, price } = bottle;
  //   console.log(bottle);
  return (
    <div className="bottle">
      <h3>Bottole:{name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
