import { useLoaderData } from "react-router-dom";
import BrandCards from "../../components/BrandCards/BrandCards";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div className="mt-16">
      <Banner></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 px-5">
        {brands.map((brand) => (
          <BrandCards key={brand.id} brand={brand}></BrandCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
