import Banner from "../Components/Home/Banner";

const Home = () => {
    return (
        <div>
            <div className="relative">
                <Banner />
                <div className="w-8/12 rounded-3xl mx-auto ring-8 ring-white/40 absolute z-[1000] left-1/2 lg:bottom-[-120%] bottom-[-40%]" style={{transform: "translate(-50%, -50%)"}}>
                    <img className="w-full rounded-3xl" src="https://i.postimg.cc/VkVstszV/banner.jpg" alt="" />
                </div>
            </div>
            <h2 className="text-center text-color-secondary font-bold text-5xl">Explore Cutting-Edge Gadgets</h2>
        </div>
    );
};

export default Home;