const getStoredCart = () => {
  const storedCardString = localStorage.getItem("cart");
  if (storedCardString) {
    return JSON.parse(storedCardString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const carStiringified = JSON.stringify(cart);
  localStorage.setItem("cart", carStiringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save to localStorage
  saveCartToLs(cart);
};

export { addToLs, getStoredCart };
