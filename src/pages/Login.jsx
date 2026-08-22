import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/authContext";
import { toast } from "sonner";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState({});
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);

    login(email, password)
      .then((data) => {
        // console.log(data.user);
        toast("Now, you are login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError({ ...error, login: errorMessage });
        // console.log("This is An ERROR", errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
        <h2 className="text-center text-2xl font-semibold pb-8">
          Login your account
        </h2>
        <hr className="mx-6 mb-6 text-gray-400" />
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error.login && (
                <div>
                  <span className="text-sm text-red-500">{error.login}</span>
                </div>
              )}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
        <p className="text-center text-sm text-gray-600">
          Don't Have An Account ?{" "}
          <Link to="/auth/register" className="text-[#f86662] underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
