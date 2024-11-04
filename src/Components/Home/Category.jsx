import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <div>
            <NavLink to={`/category/${category.category}`}>
                <h2 className="w-[205px] bg-gray-200 px-6 py-3 rounded-full text-xl font-semibold text-color-secondary/60">{category.category}</h2>
            </NavLink>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
}
export default Category;