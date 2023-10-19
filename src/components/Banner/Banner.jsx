const Banner = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/Wk0nb0K/banner.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Shop Smart, Tech Start!</h1>

          <p>
            Discover the future of tech – affordable, innovative, and just a
            click away. Elevate your tech game with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
