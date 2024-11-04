import PropTypes from "prop-types";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-2xl">
            <NavLink to='/'>
                <h2 className="w-[205px] bg-gray-200 px-6 py-3 rounded-full text-xl font-semibold text-color-secondary/60">All Product</h2>
            </NavLink>
            {
                categories.map(category => <Category key={category.id} category={category} />)
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;