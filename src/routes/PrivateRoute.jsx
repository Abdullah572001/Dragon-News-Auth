import { useContext } from "react";
import { AuthContext } from "../provider/authContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if(loading){
    return <Loading></Loading>
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
