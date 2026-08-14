import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn text-[#3960cc] border-[#3960cc]">
          <FaGoogle />
          <span>Login with Google</span>
        </button>
        <button className="btn border-black">
            <FaGithub />
            <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
