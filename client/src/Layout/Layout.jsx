import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <div className="bg-white backdrop-blur-sm bg-opacity-60 fixed top-0 w-full z-40">
        <Navbar></Navbar>
      </div>

      <div className="pt-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
