import PropTypes from "prop-types";

const ShowProducts = ({ product }) => {
  const { _id, name, brand, type, price, description, rating, photo } = product;
  return (
    <div key={product._id} className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl mt-3">{name}</h2>
        <h2 className="text-xl">
          <span className="font-semibold">Brand : </span>
          {brand}
        </h2>
        <p className="text-lg">
          <span className="font-semibold">Type : </span>
          {type}
        </p>
        <div className="text-lg">
          <p>Price : ${price}</p>
          <p>Rating : {rating}/5</p>
        </div>
        <p className="text-lg">{description}</p>
      </div>

      <div className="flex justify-around">
        <button className="btn btn-primary">Details</button>
        <button className="btn btn-info">Update</button>
      </div>
    </div>
  );
};

ShowProducts.propTypes = {
  product: PropTypes.object,
};

export default ShowProducts;