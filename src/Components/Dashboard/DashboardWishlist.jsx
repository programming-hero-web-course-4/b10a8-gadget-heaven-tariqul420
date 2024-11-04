import { useContext, useEffect } from "react";
import { getAllWishlist, removeWishlist } from "../../utilities/Wishlist";
import { addCart } from "../../utilities/Cart";
import { ContextApi } from "../../Context/Context";
import WishlistCart from "./WishlistCart";

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

    const handelAddToCart = (product) => {
        addCart(product)
        removeWishlist(product.product_id)
        const allProduct = getAllWishlist()
        setProductWishlist(allProduct)
    }
    return (
        <div className="flex flex-col gap-8 my-10">
            {
                productWishlist.map((product => <WishlistCart
                    key={product.product_id}
                    product={product}
                    handelRemove={handelRemove}
                    handelAddToCart={handelAddToCart} />))
            }
        </div>
    );
};

export default DashboardWishlist;