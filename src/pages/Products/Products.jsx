import { useLoaderData, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import ShowProducts from "../../components/ShowProducts/ShowProducts";
import { useEffect, useState } from "react";

const Products = () => {
  const products = useLoaderData();
  const { brand } = useParams();

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.filter((singleData) => singleData.name === brand);
        setSlider(matched[0].sliders);
      });
  }, [brand]);

  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-fuchsia-700">
        {slider.map((singleSlider, idx) => (
          <SwiperSlide key={idx} singleSlider={singleSlider}>
            <div className="h-[400px]">
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    <span className="text-orange-400">Explore</span> <br /> the
                    true meaning of tech with <br />{" "}
                    <span className="text-amber-400">{brand}</span>
                  </h2>
                </div>
                <div className="w-[500px]">
                  <img className="h-[400px]" src={singleSlider.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">All Products</h2>
      </div>
      {products.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
          {products &&
            products?.map((product) => (
              <ShowProducts key={product._id} product={product}></ShowProducts>
            ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-4xl font-bold mb-4">Sorry! </p>
          <p className="text-xl">There is no product available of this brand</p>
        </div>
      )}
    </div>
  );
};

export default Products;
