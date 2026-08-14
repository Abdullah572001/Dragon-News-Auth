import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="logo mt-8">
                <img className="px-8 md:px-0 mx-auto" src={logo} alt="" />
            </div>
            <h2 className="font-poppins text-center text-gray-300 text-xl mt-4">Journalism without Fear or Favour</h2>
            <p className="text-xl text-gray-500 mt-4">{moment().format('dddd, MMMM Do, YYYY')}</p>
        </div>
    );
};

export default Header;