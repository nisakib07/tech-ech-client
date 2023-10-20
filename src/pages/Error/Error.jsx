import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-fuchsia-300">
      <img src="https://i.ibb.co/YPCLHtB/error.jpg" alt="" />
      <Link className="mt-3" to="/">
        <button className="btn bg-fuchsia-600 border-none text-white hover:bg-fuchsia-500">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
