import { toast } from "react-toastify";

const getAllCart = () => {
  const all = localStorage.getItem("productCart");
  if (all) {
    const products = JSON.parse(all);
    return products;
  } else {
    return [];
  }
};
const addCart = (product) => {
  const cart = getAllCart();
  const isExist = cart.find((productItem) => productItem.product_id == product.product_id);
  if (isExist) return toast.error("Product already exists!");

  cart.push(product);
  localStorage.setItem("productCart", JSON.stringify(cart));
  toast.success("Successfully added!");
};

const removeCart = (id) => {
  const cart = getAllCart();
  const remaining = cart.filter((product) => product.product_id !== id);
  localStorage.setItem("productCart", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

export { addCart, getAllCart, removeCart };
