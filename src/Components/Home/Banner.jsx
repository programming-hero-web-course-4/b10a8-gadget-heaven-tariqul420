const Banner = () => {
    return (
        <div className="bg-color-primary w-11/12 mx-auto md:pb-[16.5rem] pb-[5rem] pt-[2rem] rounded-b-3xl mb-[10rem] lg:mb-[30rem] flex flex-col items-center">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-center text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="text-center text-white mt-8">Explore the latest gadgets that will take your experience to <br className="max-sm:hidden" /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="px-6 py-3 font-bold border-none outline-none text-secondary text-[1rem] rounded-full bg-white active:scale-[0.9] transition-all duration-300 mt-4">
                Click Me
            </button>
        </div>
    );
};

export default Banner;