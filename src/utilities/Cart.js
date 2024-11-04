import { toast } from "react-toastify";

const getAllCart = () => {
    const all = localStorage.getItem("productCart");
    if (all) {
        const products = JSON.parse(all);
        return products;
    } else {
        console.log([]);
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

export { addCart, getAllCart };
