import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const detailedProduct = useLoaderData();

  const { user } = useContext(AuthContext);
  console.log(user.email);
  const email = user.email;
  const username = email.split("@")[0];
  const { name, brand, price, description, rating, photo } = detailedProduct;

  const newItem = {
    name,
    brand,
    price,
    description,
    rating,
    photo,
    username,
  };

  const handleAddToCart = () => {
    fetch("https://assignmentb8-10-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Item added to your cart");
        }
      });
  };

  return (
    <div className="mt-32">
      <div className="flex flex-col lg:flex-row items-center justify-around border-b-4 px-10 pb-5">
        <div>
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-2xl">{brand}</p>
          <div className="flex justify-between text-lg">
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn w-full bg-green-600 text-white hover:bg-green-500">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-5 text-lg">
        <p>{description}</p>
      </div>
      <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Details;
