import { useLoaderData, useNavigation } from "react-router";
import { PacmanLoader } from "react-spinners";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news)
  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader size={50} color="red"></PacmanLoader>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Dragon News Home</h2>

      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
