import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
