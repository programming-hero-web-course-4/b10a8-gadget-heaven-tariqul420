import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addCart } from "../utilities/Cart";
import { addWishlist } from "../utilities/Wishlist";
import { useContext, useEffect } from "react";
import { ContextApi } from "../Context/Context";


const ProductDetails = () => {
    const data = useLoaderData()
    const { productId } = useParams()

    const { productCarts, setProductCart } = useContext(ContextApi);
    const { productWishlist, setProductWishlist } = useContext(ContextApi);
    const { totalAmount, setTotalAmount } = useContext(ContextApi);
    const { totalWishlist, setTotalWishlist } = useContext(ContextApi);


    const productData = data.find(product => product.product_id === parseInt(productId))

    const { product_title, product_image, price, description, Specification, rating } = productData

    const addCardsAll = (data) => {
        addCart(data)

        const isExist = productCarts.find(cart => cart.product_id === data.product_id)
        if (isExist) return

        setProductCart([...productCarts, data])
        setTotalAmount(totalAmount + data.price)
    }

    const addWishlistAll = (data) => {
        addWishlist(data)

        const isExist = productWishlist.find(wishlist => wishlist.product_id === data.product_id)
        if (isExist) return

        setProductWishlist([...productWishlist, data])
        setTotalWishlist(totalWishlist + data.price)
    }
    useEffect(() => {
        document.title = 'Product | Gadget Heaven';
    }, []);

    return (
        <div className="mb-[20rem] max-sm:mb-[37rem]">
            <div className="bg-color-primary py-8 pb-56 relative">
                <h2 className="text-center text-white font-bold text-3xl">Product Details</h2>
                <p className="text-center text-white">Explore the latest gadgets that will take your experience to <br className="max-sm:hidden" /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-10/12 mx-auto flex flex-col lg:flex-row gap-8 bg-white shadow-md p-8 absolute left-1/2 top-[100%] lg:top-[85%] z-[1000] rounded-2xl" style={{ transform: "translate(-50%,-50%)" }}>
                <div className="lg:w-[424px]">
                    <img className="w-full h-full rounded-2xl" src={product_image} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-color-secondary">{product_title}</h2>
                    <p className="text-color-secondary font-semibold mt-3">Price: ${price}</p>
                    <button className="px-4 py-1 rounded-full text-color-primary2 font-semibold my-4" style={{ border: "1px solid rgba(48, 156, 8)" }}>In Stock</button>
                    <p className="text-[18px] text-color-finely/80 font-semibold">{description}</p>
                    <div className="mt-3">
                        <h3 className="text-[18px] font-bold text-color-secondary">Specification:</h3>
                        <ol className="list-decimal list-inside">
                            {
                                Specification.map((spec, index) => <li className="text-color-finely/50 font-medium" key={index}>{spec}</li>)
                            }
                        </ol>
                    </div>
                    <div className="mt-2">
                        <h3>Rating:</h3>
                        <div className="flex gap-2 items-center">
                            <FaStar color="#f9c004" />
                            <FaStar color="#f9c004" />
                            <FaStar color="#f9c004" />
                            <FaStar color="#f9c004" />
                            <FaRegStar />
                            <p className="bg-gray-100 p-1 rounded-full">{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4 max-sm:flex-col">
                        <button
                            className="flex items-center justify-center gap-4 bg-color-primary px-4 py-2 rounded-full text-white font-bold text-xl"
                            onClick={() => addCardsAll(productData)}
                        >
                            Add To Card <HiOutlineShoppingCart size={25} />
                        </button>
                        <button
                            className="text-[1.3rem] p-2 rounded-full  hover:text-color-primary transition-all duration-300 flex items-center gap-2 justify-center"
                            style={{ border: "1px solid #00000033" }}
                            onClick={() => addWishlistAll(productData)}>Wishlist
                            <MdOutlineFavoriteBorder />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;