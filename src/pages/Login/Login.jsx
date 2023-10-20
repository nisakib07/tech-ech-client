import { useContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { userSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then(() => {
        toast.success("Signed In Successfully");

        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Sign In Failed");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signed In Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Sign In Failed");
      });
  };

  return (
    <div className="bg-pink-700">
      <div className="hero min-h-scree">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-pink-200">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-transparent bg-pink-200 shadow-2xl">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:text-pink-600 placeholder:font"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered focus:text-pink-600"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-none bg-pink-700 text-white hover:bg-pink-500"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-center font-semibold text-lg">Or</p>
                <p className="text-lg">Sign in with</p>
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-white p-5 rounded-lg">
                  <FcGoogle className="text-2xl"></FcGoogle>
                </button>
              </div>
              <p className="text-lg">
                New Here?{" "}
                <Link to="/register">
                  <span className="font-bold text-pink-600">Register Now!</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
