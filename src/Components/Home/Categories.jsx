import PropTypes from "prop-types";
import Category from "./Category";

const Categories = ({ categories }) => {
    return (
        <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-2xl">
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