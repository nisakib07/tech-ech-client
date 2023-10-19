import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import ShowProducts from "../../components/ShowProducts/ShowProducts";

const Products = () => {
  const products = useLoaderData();

  products;
  console.log(products);

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
        className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">All Products</h2>
      </div>
      {products.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
          {products.map((product) => (
            <ShowProducts key={product._id} product={product}></ShowProducts>
          ))}
        </div>
      ) : (
        <p>Hello</p>
      )}
    </div>
  );
};

export default Products;
