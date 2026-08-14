import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#f3f3f3]">
      <header className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
