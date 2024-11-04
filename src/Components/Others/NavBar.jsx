// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { ContextApi } from "../../Context/Context";

const NavBar = () => {
    const { productCarts } = useContext(ContextApi);
    const { productWishlist } = useContext(ContextApi);
    const location = useLocation()

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    const [isCart, setCart] = useState(false);
    const [isWishlist, setWishlist] = useState(false);
    return (
        <div className={`py-2 rounded-t-3xl mt-4 w-11/12 mx-auto ${location.pathname === '/' ? 'bg-color-primary' : ''}`}>
            <nav className={`flex items-center justify-between relative boxShadow rounded-full px-[10px] py-[8px] w-11/12 mx-auto my-6 ${location.pathname === '/' ? 'bg-color-primary' : ''}`}>
                <Link to="/">
                    <h1 className={`font-bold text-color-secondary text-2xl ${location.pathname === '/' && 'text-white'}`}>Gadget Heaven</h1>
                </Link>
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                    <NavLink to="/"><li className={`navBarLink ${location.pathname === '/' && 'text-white border-b-2 border-solid border-white'}`}>Home</li></NavLink>
                    <NavLink to="/statistics"><li className={`navBarLink ${location.pathname === '/' && 'text-white'}`}>Statistics</li></NavLink>
                    <NavLink to="/dashboard"><li className={`navBarLink ${location.pathname === '/' && 'text-white'}`}>Dashboard</li></NavLink>
                    <NavLink to="/about"><li className={`navBarLink ${location.pathname === '/' && 'text-white'}`}>About</li></NavLink>

                </ul>

                <div className="items-center gap-[10px] flex">
                    <div className="relative w-fit h-full flex items-center justify-center"
                        onMouseEnter={() => setCart(true)}
                        onMouseLeave={() => setCart(false)}
                    >
                        {/*  initial Logo  */}
                        <button className={`text-[1.3rem] p-2 rounded-full  hover:text-color-primary transition-all duration-300 ${location.pathname === '/' && 'bg-white'}`} style={{ border: "1px solid #00000033" }}>
                            <HiOutlineShoppingCart />
                        </button>

                        <button className="absolute top-[-15px] right-[-5px] w-[25px] h-[25px] items-center justify-center bg-color-primary2 rounded-full font-bold">{productCarts.length}</button>

                        {/*  tooltip  */}
                        <div
                            className={` ${isCart ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute bottom-[-290%] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>
                            {/*  Content  */}
                            <h2 className="text-center font-bold text-xl">{productCarts.length} Item In Cart</h2>
                            <button
                                className="flex mx-auto  items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold">
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </button>

                            {/*  top arrow  */}
                            <div
                                className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute top-[-7px] left-[50%] transform translate-x-[-50%]"></div>
                        </div>
                    </div>

                    <div className="relative w-fit h-full flex items-center justify-center"
                        onMouseEnter={() => setWishlist(true)}
                        onMouseLeave={() => setWishlist(false)}
                    >
                        {/*  initial Logo  */}
                        <button className={`text-[1.3rem] p-2 rounded-full  hover:text-color-primary transition-all duration-300 ${location.pathname === '/' && 'bg-white'}`} style={{ border: "1px solid #00000033" }}>
                            <MdOutlineFavoriteBorder />
                        </button>

                        <button className="absolute top-[-15px] right-[-5px] w-[25px] h-[25px] items-center justify-center bg-color-primary2 rounded-full font-bold">{productWishlist.length}</button>

                        {/*  tooltip  */}
                        <div
                            className={` ${isWishlist ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute bottom-[-290%] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>
                            {/*  Content  */}
                            <h2 className="text-center font-bold text-xl">{productWishlist.length} Item In Cart</h2>
                            <button
                                className="flex mx-auto  items-center border border-solid border-color-primary px-4 py-2 rounded-full font-bold">
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </button>

                            {/*  top arrow  */}
                            <div
                                className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute top-[-7px] left-[50%] transform translate-x-[-50%]"></div>
                        </div>
                    </div>

                    <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
                </div>

                <aside
                    className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                    <div className="relative mb-5">
                        <input
                            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                            placeholder="Search..." />
                        <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
                    </div>
                    <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                        <NavLink to="/"><li className="navBarLink">Home</li></NavLink>
                        <NavLink to="/statistics"><li className="navBarLink">Coffees</li></NavLink>
                        <NavLink to="/dashboard"><li className="navBarLink">Dashboard</li></NavLink>
                    </ul>
                </aside>
            </nav>
        </div>
    );
};

export default NavBar;