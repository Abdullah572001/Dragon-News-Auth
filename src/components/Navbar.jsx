import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/authContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("The user is logout");
      })
      .catch((err) => {
        // const errorCode = err.code;
        // const errorMessage = err.message;
        // console.log("This is An ERROR", errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold">{user && user.displayName}</h2>
      </div>
      <div>
        <ul className="text-gray-400 flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        {user ? (
          <img className="w-8 h-8 rounded-full object-cover" src={user.photoURL} alt="" />
        ) : (
          <img src={userIcon} alt="" />
        )}

        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            className="btn text-xl bg-[#403f3f] text-white font-medium rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn text-xl bg-[#403f3f] text-white font-medium rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
