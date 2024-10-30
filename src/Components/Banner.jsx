import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-bg py-28">
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-6">
        <h1 className="font-bold text-white md:text-[3.25rem]">
          Discover a Personalized Culinary Journey Crafted Just for You
        </h1>
        <p className="text-lg text-white font-normal">
          Whether you're just starting out or an experienced chef, our tailored
          cooking classes offer hands-on learning, expert guidance, and creative
          recipes to help you enhance your skills and master the art of cooking.
        </p>
        <div className="flex gap-4 text-xl font-semibold">
            <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
            <button className="btn btn-outline text-white hover:bg-green-400 rounded-full">Our Feedback</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
