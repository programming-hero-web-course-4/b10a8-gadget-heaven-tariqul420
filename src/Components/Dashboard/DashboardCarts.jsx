import { useContext, useEffect, useState } from "react";
import { getAllCart, removeCart } from "../../utilities/Cart";
import DashboardCart from "./DashboardCart";
import { ContextApi } from "../../Context/Context";
import { HiAdjustments } from "react-icons/hi";

const DashboardCarts = () => {
    const { productCarts, setProductCart } = useContext(ContextApi);
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        const allProduct = getAllCart()
        setProductCart(allProduct)
    }, [setProductCart])

    const handelRemove = (id) => {
        removeCart(id)
        const allProduct = getAllCart()
        setProductCart(allProduct)
    }

    useEffect(() => {
        const total = productCarts.reduce((acc, product) => acc + product.price, 0);
        setTotalAmount(total);
    }, [productCarts]);

    const handelSort = () => {
        const sortedData = [...productCarts].sort((a, b) => b.price - a.price);
        setProductCart(sortedData)
        console.log(sortedData);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-color-secondary">Cart</h2>
                </div>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">Total cost: ${totalAmount.toFixed(2)}</h2>
                    <button className="flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl" onClick={handelSort}>Sort by Price <HiAdjustments /></button>
                    <button className="flex items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold text-xl bg-color-primary text-white">Purchase</button>
                </div>
            </div>

            <div className="flex flex-col gap-8 my-10">
                {
                    productCarts.map((product => <DashboardCart key={product.product_id} product={product} handelRemove={handelRemove} />))
                }
            </div>
        </>
    );
};

export default DashboardCarts;