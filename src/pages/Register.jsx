import { useContext, useState } from "react";
import { AuthContext } from "../provider/authContext";
import { useNavigate } from "react-router";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    // get the user
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length <= 5) {
      setError({ ...error, name: "The character must be more than 5" });
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const photoURL = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photoURL, email, password);

    createNewUser(email, password)
      .then((data) => {
        const user = data.user;
        setUser(user);
        // console.log(user);
        updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          navigate("/")
        });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        // console.log("This is An ERROR", errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
        <h2 className="text-center text-2xl font-semibold pb-8">
          Register your account
        </h2>
        <hr className="mx-6 mb-6 text-gray-400" />
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
              {error.name && (
                <label className="label text-sm text-red-500 mb-3">
                  {error.name}
                </label>
              )}

              <label className="label">Photo URL</label>
              <input
                name="url"
                type="text"
                className="input w-full"
                placeholder="Enter your photo url"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
