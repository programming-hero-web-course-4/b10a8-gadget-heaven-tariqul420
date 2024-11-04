import PropTypes from "prop-types";
import { IoCloseCircleOutline } from "react-icons/io5";

const WishlistCart = ({ product, handelRemove, handelAddToCart }) => {
    const { product_image, product_title, description, price, product_id } = product
    return (
        <div className="flex p-8 gap-12 shadow-md hover:shadow-lg rounded-2xl active:scale-[1] transition-all duration-300">
            <div className="w-[300px] h-[150px]">
                <img className="w-full h-full object-contain" src={product_image} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <h2 className="font-bold text-2xl text-color-secondary">{product_title}</h2>
                <p className="text-lg font-semibold text-color-secondary/60">{description}</p>
                <p className="text-xl font-semibold text-color-secondary/80">Price: ${price}</p>
                <div>
                    <button
                        className="flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl bg-color-primary text-white"
                        onClick={() => handelAddToCart(product)}>Add To Cart</button>
                </div>
            </div>
            <div>
                <button className="text-red-500 text-3xl"
                    onClick={() => handelRemove(product_id)}>
                    <IoCloseCircleOutline />
                </button>
            </div>
        </div>
    );
};

WishlistCart.propTypes = {
    product: PropTypes.object.isRequired,
    handelRemove: PropTypes.func.isRequired,
    handelAddToCart: PropTypes.func.isRequired
}
export default WishlistCart;