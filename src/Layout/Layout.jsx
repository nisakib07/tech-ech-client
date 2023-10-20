import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-fuchsia-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Layout;
