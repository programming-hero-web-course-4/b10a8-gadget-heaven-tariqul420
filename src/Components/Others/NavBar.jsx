// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const NavBar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <div className="my-6">
            <nav
                className="flex items-center justify-between relative bg-white boxShadow rounded-full px-[10px] py-[8px] w-11/12 mx-auto">
                <Link to="/">
                    <h1 className="font-bold text-color-secondary text-2xl">Gadget Heaven</h1>
                </Link>
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                    <NavLink to="/"><li className="navBarLink">Home</li></NavLink>
                    <NavLink to="/statistics"><li className="navBarLink">Statistics</li></NavLink>
                    <NavLink to="/dashboard"><li className="navBarLink">Dashboard</li></NavLink>

                </ul>

                <div className="items-center gap-[10px] flex">
                    <button className="text-[1.3rem] p-2 rounded-full  hover:text-color-primary transition-all duration-300" style={{ border: "1px solid #00000033" }}>
                        <HiOutlineShoppingCart />
                    </button>
                    <button className="text-[1.3rem] p-2 rounded-full  hover:text-color-primary transition-all duration-300" style={{ border: "1px solid #00000033" }}>
                        <MdOutlineFavoriteBorder />
                    </button>

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