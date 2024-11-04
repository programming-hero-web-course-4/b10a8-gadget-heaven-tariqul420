import { useEffect, useState } from "react";
import DashboardCart from "../Components/Dashboard/DashboardCart";
import DashboardWishlist from "../Components/Dashboard/DashboardWishlist";
import { getAllCart } from "../utilities/Cart";

const Dashboard = () => {
    const [dashboardBtn, setDashboardBtn] = useState(true)
    const [cart, setCart] = useState([])
    useEffect(() => {
        const productCart = getAllCart()
        setCart(productCart)
    }, [])
    console.log(cart);
    return (
        <div>
            <div className="bg-color-primary py-8 flex flex-col items-center">
                <h2 className="text-center text-white font-bold text-3xl">Statistics</h2>
                <p className="text-center text-white">Explore the latest gadgets that will take your experience <br className="max-sm:hidden" /> to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-8 mt-8">
                    <button
                        className={`font-bold text-lg px-6 text-white py-1 border border-solid border-white rounded-full ${dashboardBtn ? 'bg-white text-color-primary' : ''}`}
                        onClick={() => setDashboardBtn(true)}
                    >
                        Cart
                    </button>
                    <button
                        className={`font-bold text-lg px-6 text-white py-1 border border-solid border-white rounded-full ${!dashboardBtn ? 'bg-white text-color-primary' : ''}`}
                        onClick={() => setDashboardBtn(false)}>
                        Wishlist
                    </button>
                </div>
            </div>

            <div className="w-11/12 mx-auto mt-16">
                {
                    dashboardBtn
                        ?
                        <DashboardCart />
                        :
                        <DashboardWishlist />
                }
            </div>
        </div >
    );
};

export default Dashboard;