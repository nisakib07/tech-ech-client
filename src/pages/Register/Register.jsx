import { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, userSignOut, userProfileUpdate } =
    useContext(AuthContext);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password must have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\\-/]/.test(password)) {
      toast.error("Password must have a special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        userSignOut();
        userProfileUpdate(name, photo);
        toast.success("Successfully Registered! Go to login!!!");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
        e.target.reset();
      });
  };
  return (
    <div className="bg-pink-700">
      <div className="hero min-h-scree">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-pink-200">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-transparent bg-pink-200 shadow-2xl">
            <form onSubmit={handleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered focus:text-pink-600 placeholder:font"
                  required
                />
                <label className="label">
                  <span className="label-text font-semibold ">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photoURL"
                  className="input input-bordered focus:text-pink-600 placeholder:font"
                />
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
                  value="Register"
                />
              </div>
              <p className="text-lg">
                Already have an account?
                <Link to="/login">
                  <span className="font-bold ml-1 text-pink-600">Login!</span>
                </Link>
              </p>
            </form>

            <ToastContainer
              pauseOnHover={false}
              autoClose={2000}></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
