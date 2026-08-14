import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/layout-component/LeftAside";
import RightAside from "../components/layout-component/RightAside";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-8">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto mt-8">
          <Navbar></Navbar>
        </section>
      </nav>
      <main className="w-11/12 mx-auto mt-8 md:grid grid-cols-12 gap-4">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
