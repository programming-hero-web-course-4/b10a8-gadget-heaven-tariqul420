import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import { useEffect } from "react";

const Home = () => {
    const categories = useLoaderData()
    useEffect(() => {
        document.title = 'Gadget Heaven';
    }, []);

    return (
        <div>
            <div className="relative">
                <Banner />
                <div className="w-8/12 rounded-3xl mx-auto ring-8 ring-white/40 absolute z-[1000] left-1/2 lg:bottom-[-120%] bottom-[-40%]" style={{ transform: "translate(-50%, -50%)" }}>
                    <img className="w-full rounded-3xl" src="https://i.postimg.cc/VkVstszV/banner.jpg" alt="" />
                </div>
            </div>
            <h2 className="text-center text-color-secondary font-bold text-5xl">Explore Cutting-Edge Gadgets</h2>

            <div className="w-11/12 mx-auto mt-8 flex gap-8">
                <div>
                    <Categories categories={categories} />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;