import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => {
    return (
        <div className="bg-color-primary py-8">
            <h2 className="text-center text-white font-bold text-3xl">{title}</h2>
            <p className="text-center text-white">{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
export default Heading;