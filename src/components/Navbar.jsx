import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="hidden md:block"></div>
            <div>
                <ul className="text-gray-400 flex gap-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className="btn text-xl bg-[#403f3f] text-white font-medium rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;