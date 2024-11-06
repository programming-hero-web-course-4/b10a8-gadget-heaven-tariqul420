import { useContext, useEffect, useState } from "react";
import { getAllCart, removeCart } from "../../utilities/Cart";
import DashboardCart from "./DashboardCart";
import { ContextApi } from "../../Context/Context";
import { HiAdjustments } from "react-icons/hi";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

Modal.setAppElement('#root');

const DashboardCarts = () => {
    const { productCarts, setProductCart } = useContext(ContextApi);
    const { setProductWishlist } = useContext(ContextApi);
    const { totalAmount, setTotalAmount } = useContext(ContextApi);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const allProduct = getAllCart();
        setProductCart(allProduct);
    }, [setProductCart]);

    const handelRemove = (id) => {
        removeCart(id);
        const allProduct = getAllCart();
        setProductCart(allProduct);
    };

    useEffect(() => {
        const total = productCarts.reduce((acc, product) => acc + product.price, 0);
        setTotalAmount(total);
    }, [productCarts, setTotalAmount]);

    const handelSort = () => {
        const sortedData = [...productCarts].sort((a, b) => b.price - a.price);
        setProductCart(sortedData);
    };

    const handelPurchase = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setProductCart([]);
        setProductWishlist([])
        localStorage.removeItem("productCart");
        localStorage.removeItem("productWishlist");
    };

    return (
        <>
            <div className="flex items-center justify-between max-sm:flex-col">
                <div>
                    <h2 className="text-2xl font-bold text-color-secondary">Cart</h2>
                </div>
                <div className="flex items-center gap-4 max-sm:flex-col">
                    <h2 className="text-xl font-bold">Total cost: ${totalAmount.toFixed(2)}</h2>
                    <button
                        className={`flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl gap-2 ${productCarts.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-color-secondary'
                            }`}
                        onClick={handelSort}
                        disabled={productCarts.length === 0}
                    >Sort by Price <HiAdjustments color="rgb(149, 56, 226)" /></button>
                    <button
                        onClick={handelPurchase}
                        className={`flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl ${productCarts.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-color-primary text-white'
                            }`}
                        disabled={productCarts.length === 0}>Purchase</button>
                </div>
            </div>

            <div className="flex flex-col gap-8 my-10">
                {
                    productCarts.map((product) => (
                        <DashboardCart key={product.product_id} product={product} handelRemove={handelRemove} />
                    ))
                }
            </div>

            {/* Modal for purchase confirmation */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Payment Successfully"
                className="bg-white p-6 w-[400px] mx-auto my-10 rounded-lg shadow-lg text-center flex items-center justify-center flex-col"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center"
            >
                <img src="https://i.postimg.cc/dV1tDZcC/Successfull.png" alt="" />
                <h2 className="text-2xl font-bold mb-4 mt-6">Payment Successfully</h2>
                <p>Thanks for purchasing.</p>
                <p>Total: ${totalAmount.toFixed(2)}</p>
                <div className="flex justify-center gap-4 mt-6">
                    <Link to="/">
                        <button onClick={closeModal} className="px-4 py-2 bg-green-500 text-white rounded-lg w-full">Close</button>
                    </Link>
                </div>
            </Modal>
        </>
    );
};

export default DashboardCarts;