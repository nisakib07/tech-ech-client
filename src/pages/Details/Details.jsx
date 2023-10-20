import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detailedProduct = useLoaderData();
  const { _id, name, brand, price, description, rating, photo } =
    detailedProduct;
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
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
          </div>
          <button className="btn w-full bg-green-600 text-white hover:bg-green-500">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-5 text-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
