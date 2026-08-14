const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
        <h2 className="text-center text-2xl font-semibold pb-8">
          Register your account
        </h2>
        <hr className="mx-6 mb-6 text-gray-400" />
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input type="email" className="input w-full" placeholder="Enter your name" />

            <label className="label">Photo URL</label>
            <input type="email" className="input w-full" placeholder="Enter your photo url" />

            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />

            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
