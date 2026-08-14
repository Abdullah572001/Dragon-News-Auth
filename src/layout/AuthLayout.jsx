import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
        <div>
            <h2>This is Auth layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;