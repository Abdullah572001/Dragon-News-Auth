import img1 from "../assets/swimming.png"
import img2 from "../assets/class.png"
import img3 from "../assets/playground.png"

const QZone = () => {
    return (
        <div className="px-2 py-5 bg-[#f3f3f3] mt-4">
            <h2 className="text-xl font-semibold mb-3">Q-Zone</h2>
            <div className="mt-4 *:mt-4">
                <img className="w-full" src={img1} alt="" />
                <img className="w-full" src={img2} alt="" />
                <img className="w-full" src={img3} alt="" />
            </div>
        </div>
    );
};

export default QZone;