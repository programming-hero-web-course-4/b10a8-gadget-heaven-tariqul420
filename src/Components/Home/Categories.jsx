import PropTypes from "prop-types";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="flex flex-col gap-8 bg-gray-100 p-6 rounded-2xl w-[253px]">
                <div>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `w-[205px] px-6 py-3 rounded-full text-xl font-semibold ${isActive ? "bg-color-primary text-white" : "bg-gray-200 text-color-secondary/60"}`}>
                        All Products
                    </NavLink>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        categories.map(category => <Category key={category.id} category={category} />)
                    }
                </div>
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;