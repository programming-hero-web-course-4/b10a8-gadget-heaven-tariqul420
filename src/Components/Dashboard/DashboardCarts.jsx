import { useContext, useEffect } from "react";
import { getAllCart, removeCart } from "../../utilities/Cart";
import DashboardCart from "./DashboardCart";
import { ContextApi } from "../../Context/Context";

const DashboardCarts = () => {
    const { productCarts, setProductCart } = useContext(ContextApi);
    useEffect(() => {
        const allProduct = getAllCart()
        setProductCart(allProduct)
    }, [setProductCart])

    const handelRemove = (id) => {
        removeCart(id)
        const allProduct = getAllCart()
        setProductCart(allProduct)
    }
    return (
        <div className="flex flex-col gap-8 my-10">
            {
                productCarts.map((product => <DashboardCart key={product.product_id} product={product} handelRemove={handelRemove} />))
            }
        </div>
    );
};

export default DashboardCarts;