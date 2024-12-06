import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto md:pt-[200px] pt-[120px] px-5">
        <p className="text-green bg-grey-50 text-[20px] font-medium inline-block px-3 rounded-lg">
          Welcome to Fresh Harvest
        </p>
        <h1 className="text-black text-[35px] leading-[35px] md:text-[70px] md:leading-[70px] font-medium my-4">
          Fresh Fruits and <br /> Vegetables
        </h1>
        <p className="md:w-[448px] w-full text-grey-100">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </p>
        <button className="py-3 px-6 bg-primary text-white rounded-lg mt-8">
          Shop Now
        </button>
        <div className="md:ml-24 md:pt-6 hidden md:block">
          <img src="/images/Vectors.png" alt="vector image" />
        </div>
        <div className="md:w-[331px] w-full bg-grey-50 rounded-lg shadow-md flex items-center justify-between p-3 md:ml-[200px] mt-[20px]">
          <div>
            <h2 className="text-green font-medium">Special Offer</h2>
            <h2 className="md:text-[28px] text-[16px] text-black font-medium">Fresh Salad</h2>
            <h2 className="text-green font-medium text-[15px] md:text-[24px] mb-3">
              Up to{" "}
              <span className="text-black text-[15px] md:text-[24px] font-medium">
                70% off
              </span>
            </h2>
            <h2 className="bg-[#176D38] text-white rounded-[50px] inline-block md:px-4 px-6 md:font-semibold font-normal uppercase text-nowrap">
              Code: <span className="text-[#FAC714]">Fresh25</span>
            </h2>
          </div>
          <div>
            <img src="/images/offers.png" alt="offer image" />
          </div>
        </div>
        <div className="mt-8 pb-12">
          <p>Download App:</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-2">
            <img src="/images/appstore.png" alt="app store image" />
            <img src="/images/googleplay.png" alt="google play sore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
