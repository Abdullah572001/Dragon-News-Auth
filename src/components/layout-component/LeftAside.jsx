import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-medium">All category({categories.length})</h2>
      <div className="grid mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-white border-none mt-3 text-xl font-medium text-gray-400 hover:bg-[#e7e7e7] hover:text-black"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
