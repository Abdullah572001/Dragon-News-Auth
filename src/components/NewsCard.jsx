import { CiBookmark, CiShare2 } from "react-icons/ci";
import star from "../assets/star.png"
import { FaEye } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  // console.log(singleNews)

  return (
    <div className="mb-7 border border-gray-300">
      <div className="bg-[#f3f3f3] p-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full bg-[#e5e7e5]"
            src={singleNews.author.img}
            alt=""
          />
          <div>
            <h2 className="text-lg font-semibold">{singleNews.author.name}</h2>
            <p className="text-sm text-gray-400 font-medium">
              {singleNews.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-2xl text-gray-600">
          <button className="hover:cursor-pointer">
            <CiBookmark></CiBookmark>
          </button>
          <button className="hover:cursor-pointer">
            <CiShare2></CiShare2>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {singleNews.title}
        </h2>
        <img className="my-4 w-full" src={singleNews.image_url} alt="" />
        <p className="line-clamp-4 text-gray-500 text-md">{singleNews.details}</p>
        <span className="font-semibold text-[#ffb084]">Read More</span>
        <hr className="text-gray-300 my-4" />
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p className="text-gray-500">{singleNews.rating.number}</p>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <FaEye></FaEye>
            <p>{singleNews.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
