import PropTypes from "prop-types";
import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";

const Card = ({ gadget }) => {
    const { product_image, product_title, price } = gadget
    return (
        <div className="shadow-md rounded-md flex flex-col justify-between">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-[1.4rem] font-semibold">{product_title}</h2>
                <div className="flex items-center gap-[5px]">
                    <BiSolidLeaf
                        className="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer" />
                    <FaFire className="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer" />
                </div>
            </div>
            <img
                src={product_image}
                className="w-full"
            />

            <div className="p-4">
                <div className="mt-5 flex items-center justify-between w-full">
                    <h3 className="text-[1.4rem] font-semibold flex items-center gap-[4px]">
                        {price}
                    </h3>

                    <button className="py-2 px-6 border border-color-primary text-color-primary rounded-md">View Details</button>
                </div>
            </div>

        </div>
    );
};

Card.propTypes = {
    gadget: PropTypes.object.isRequired,
}
export default Card;