import { PacmanLoader } from "react-spinners";
import Header from "../components/Header";
import RightAside from "../components/layout-component/RightAside";
import { Link, useLoaderData, useNavigation } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const { data } = useLoaderData();
//   console.log(data[0].image_url);

  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return (
      <div className="flex justify-center items-center">
        <PacmanLoader size={50} color="red"></PacmanLoader>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 mt-8">
        <section className="col-span-9">
          <h2 className="text-xl font-bold mb-4">Dragon News</h2>
          <div className="p-5 border border-gray-400 rounded-md space-y-4">
            <img src={data[0].image_url} alt="" />
            <h2 className="text-xl font-bold">{data[0].title}</h2>
            <p className=" text-gray-500 text-md">{data[0].details}</p>

            <Link to={`/category/${data[0].category_id}`} className="btn bg-[#d72050] text-white text-lg font-medium mt-3"> <FaArrowLeftLong></FaArrowLeftLong> All news in this category</Link>
          </div>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
