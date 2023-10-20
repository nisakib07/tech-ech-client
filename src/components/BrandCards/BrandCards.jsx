import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandCards = ({ brand }) => {
  const { name, image } = brand;
  //   const [slider, setSlider] = useState(null);

  //   useEffect(() => {
  //     const matched = brands.filter((singleBrand) => singleBrand.name === name);
  //     setSlider(matched);
  //   }, [brands, name]);

  //   console.log(slider);

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
  brands: PropTypes.array,
};

export default BrandCards;
