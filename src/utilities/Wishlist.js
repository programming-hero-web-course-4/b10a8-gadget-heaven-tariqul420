import { toast } from "react-toastify";

const getAllWishlist = () => {
  const all = localStorage.getItem("productWishlist");
  if (all) {
    const products = JSON.parse(all);
    return products;
  } else {
    return [];
  }
};
const addWishlist = (product) => {
  const wishlist = getAllWishlist();
  const isExist = wishlist.find((productItem) => productItem.product_id == product.product_id);
  if (isExist) return toast.error("Product already exists!");

  wishlist.push(product);
  localStorage.setItem("productWishlist", JSON.stringify(wishlist));
  toast.success("Successfully Add Wishlist!");
};

const removeWishlist = (id) => {
  const wishlist = getAllWishlist();
  const remaining = wishlist.filter((product) => product.product_id !== id);
  localStorage.setItem("productWishlist", JSON.stringify(remaining));
  toast.success("Successfully Remove Wishlist!");
};

export { getAllWishlist, addWishlist, removeWishlist };
