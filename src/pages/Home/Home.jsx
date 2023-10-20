import { useLoaderData } from "react-router-dom";
import BrandCards from "../../components/BrandCards/BrandCards";
import Banner from "../../components/Banner/Banner";
import WhyUs from "../../components/WhyUs/WhyUs";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div className="mt-16">
      <Banner></Banner>
      <h2 className="mt-10 text-center text-4xl font-bold">
        Our Trusted Brands
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 px-5">
        {brands.map((brand) => (
          <BrandCards key={brand.id} brand={brand} brands={brands}></BrandCards>
        ))}
      </div>
      <div className="mt-10">
        <WhyUs></WhyUs>
      </div>
    </div>
  );
};

export default Home;
