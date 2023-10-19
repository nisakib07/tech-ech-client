import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCards = ({ brand }) => {
  const { name, image } = brand;
  return (
    <Link to={`/products/${name}`}>
      <div className="card glass">
        <figure>
          <img className="w-full h-[290px]" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

BrandCards.propTypes = {
  brand: PropTypes.object,
};

export default BrandCards;
