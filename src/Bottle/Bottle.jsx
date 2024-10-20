import "./Bottle.css";
const Bottle = ({ bottle }) => {
  const { name, img, price } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h3>Bottole:{name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
    </div>
  );
};

export default Bottle;
