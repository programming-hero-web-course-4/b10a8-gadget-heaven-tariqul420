import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ gadget }) => {
    const navigate = useNavigate()

    const { product_image, product_title, price, product_id } = gadget
    return (
        <div className="shadow-sm hover:shadow-lg rounded-2xl p-4 hover:text-white active:scale-[1] transition-all duration-300">
            <img className="rounded-xl w-full h-[190px]" src={product_image} alt="" />
            <h1 className="text-color-finely font-bold text-2xl">{product_title}</h1>
            <p className="font-semibold text-[18px] text-color-finely/70 mt-3">Price: {price}K</p>
            <button
                onClick={() => navigate(`/product/${product_id}`)}
                className="px-6 py-3 border-none text-secondary text-[1rem] rounded-full font-bold hover:bg-color-primary hover:text-white active:scale-[0.9] transition-all duration-300 mt-4"
                style={{ border: "1px solid rgb(149, 56, 226)" }}>
                view Details
            </button>
        </div>
    );
};

Card.propTypes = {
    gadget: PropTypes.object.isRequired,
}
export default Card;