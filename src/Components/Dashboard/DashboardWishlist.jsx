import { useContext, useEffect } from "react";
import { getAllWishlist, removeWishlist } from "../../utilities/Wishlist";
import DashboardCart from "./DashboardCart";
import { ContextApi } from "../../Context/Context";

const DashboardWishlist = () => {
    const { productWishlist, setProductWishlist } = useContext(ContextApi);
    useEffect(() => {
        const allProduct = getAllWishlist()
        setProductWishlist(allProduct)
    }, [setProductWishlist])

    const handelRemove = (id) => {
        removeWishlist(id)
        const allProduct = getAllWishlist()
        setProductWishlist(allProduct)
    }

    return (
        <div className="flex flex-col gap-8 my-10">
            {
                productWishlist.map((product => <DashboardCart key={product.product_id} product={product} handelRemove={handelRemove} />))
            }
        </div>
    );
};

export default DashboardWishlist;