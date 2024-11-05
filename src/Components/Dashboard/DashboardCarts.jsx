import { useContext, useEffect, useState } from "react";
import { getAllCart, removeCart } from "../../utilities/Cart";
import DashboardCart from "./DashboardCart";
import { ContextApi } from "../../Context/Context";
import { HiAdjustments } from "react-icons/hi";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DashboardCarts = () => {
    const { productCarts, setProductCart } = useContext(ContextApi);
    const { setProductWishlist } = useContext(ContextApi);
    const [totalAmount, setTotalAmount] = useState(0);
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
    }, [productCarts]);

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
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-color-secondary">Cart</h2>
                </div>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">Total cost: ${totalAmount.toFixed(2)}</h2>
                    <button className="flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl gap-2" onClick={handelSort}>Sort by Price <HiAdjustments /></button>
                    <button onClick={handelPurchase} className="flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl bg-color-primary text-white">Purchase</button>
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
                    <button onClick={closeModal} className="px-4 py-2 bg-green-500 text-white rounded-lg w-full">Close</button>
                </div>
            </Modal>
        </>
    );
};

export default DashboardCarts;