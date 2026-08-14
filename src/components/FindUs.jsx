import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-white *:text-gray-500 *:justify-start">
        <button className="btn join-item">
            <FaFacebookF className="text-[#36559a] bg-[#f3f3f3] rounded-full"></FaFacebookF>  Facebook
        </button>
        <button className="btn join-item">
            <FaInstagram className="text-[#eb9aa7]"></FaInstagram>  Instagram
        </button>
        <button className="btn join-item">
            <FaTwitter className="text-[#57a7de]"></FaTwitter>  Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
