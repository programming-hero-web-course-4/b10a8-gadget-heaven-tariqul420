import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities/Cart";
import DashboardCart from "./DashboardCart";

const DashboardCarts = () => {
    const [productCarts, setProductCart] = useState([])
    useEffect(() => {
        const allProduct = getAllCart()
        setProductCart(allProduct)
    }, [])

    const handelRemove = (id) => {
        console.log(id);

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