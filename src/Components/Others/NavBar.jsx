import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
};

export default NavBar;