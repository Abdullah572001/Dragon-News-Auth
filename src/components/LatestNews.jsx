import { Link } from "react-router";



const LatestNews = () => {
    return (
        <div className="flex p-4 bg-[#f3f3f3] gap-4 items-center">
            <p className="bg-[#d72050] text-white py-2 px-4 text-xl font-semibold">Latest</p>
            <div className="w-full overflow-hidden">
                <div className="whitespace-nowrap latest-p text-xl text-gray-600">
                <Link className="mr-8" to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores. Odio officiis voluptatum dolores architecto!</Link>
                <Link to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores. Odio officiis voluptatum dolores architecto!</Link>
                <Link to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores. Odio officiis voluptatum dolores architecto!</Link>
            </div>
            </div>
        </div>
    );
};

export default LatestNews;