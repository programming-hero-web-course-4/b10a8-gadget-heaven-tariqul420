import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <div>
            <NavLink
                to={`/category/${category.category}`}
                className={({ isActive }) =>
                    `w-full block px-6 py-3 rounded-full text-xl font-semibold ${isActive ? "bg-color-primary text-white" : "bg-gray-200 text-color-secondary/60"}`
                }>
                {category.category}
            </NavLink>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
}
export default Category;