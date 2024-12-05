import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[145px] bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Circle Background */}
          <div className="absolute w-[300px] h-[300px] bg-[#749B3F] rounded-full top-28 left-40 z-0"></div>
          <img
            src="/images/aboutimg.png"
            alt="Farmer with fresh produce"
            className="rounded-lg w-[75%] relative"
          />
          {/* Tag */}
          <div className="absolute top-[250px] left-[300px] bg-white shadow-md rounded-md px-4 py-2 z-20">
            <span className="text-black font-semibold flex items-center gap-2">
              <img className="w-[30px]" src="/images/Logo-1.png" alt="logo" />
              Fresh Harvests
            </span>
          </div>
          {/* Product Info */}
          <div className="absolute top-[300px] left-[400px] bg-white bg-opacity-90 shadow-md rounded-md px-4 py-3 text-center w-[150px] z-20">
            <div className="bg-[#F4F6F6] p-5 rounded-[20px] flex items-center justify-center w-[100px] mx-auto">
              <img
                className="w-full"
                src="/images/16-4.png"
                alt="salad image"
              />
            </div>
            <span className="block font-medium">Mushroom</span>
            <p className="text-gray-600">5.2$/kg</p>
            <button className="mt-2 bg-grey-50 text-black px-4 py-1 rounded hover:bg-orange-600">
              Add to cart
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <div className="mb-4">
            <p className="text-green bg-grey-50 text-[20px] font-medium inline-block px-3 rounded-lg">
              About Us
            </p>
          </div>
          <h2 className="text-2xl font-bold text-black">About Fresh Harvest</h2>
          <p className="mt-4 text-grey-100 leading-relaxed">
            Welcome to Fresh Harvest, your premium destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="mt-6 text-primary border border-primary px-6 py-3 font-semibold rounded hover:bg-orange-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
