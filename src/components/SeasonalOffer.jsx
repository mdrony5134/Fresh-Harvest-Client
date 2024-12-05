import React from "react";
import Countdown from "react-countdown";

const SeasonalOffer = () => {
  // Set the target date (e.g., 3 days from now)
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

  // Completion handler (optional)
  const handleComplete = () => {
    console.log("Countdown completed!");
  };

  return (
    <div className="bg-white py-12 offer-bg my-[145px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="text-green bg-grey-50 inline-block px-3 py-1 rounded-md text-sm font-medium mb-2">
            Special Offer
          </p>
          <h1 className="text-[50px] leading-[80px] font-medium text-black">
            Seasonal Fruit Bundle
          </h1>
          <p className="text-[30px] mt-2">
            Discount up to{" "}
            <span className="text-primary font-semibold">80% OFF</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Countdown
              date={targetDate}
              onComplete={handleComplete}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex gap-4">
                  <div className="flex flex-col items-center bg-white px-4 py-2 rounded-md">
                    <span className="text-2xl font-bold text-black">
                      {days < 10 ? `0${days}` : days}
                    </span>
                    <span className="text-sm text-gray-500">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white px-4 py-2 rounded-md">
                    <span className="text-2xl font-bold text-black">
                      {hours < 10 ? `0${hours}` : hours}
                    </span>
                    <span className="text-sm text-gray-500">Hours</span>
                  </div>
                  <div className="flex flex-col items-center bg-white px-4 py-2 rounded-md">
                    <span className="text-2xl font-bold text-black">
                      {minutes < 10 ? `0${minutes}` : minutes}
                    </span>
                    <span className="text-sm text-gray-500">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center bg-white px-4 py-2 rounded-md">
                    <span className="text-2xl font-bold text-black">
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                    <span className="text-sm text-gray-500">Seconds</span>
                  </div>
                </div>
              )}
            />
          </div>

          {/* Code Section */}
          <div className="mt-6">
            <h2 className="bg-[#176D38] text-white rounded-[50px] inline-block py-2 px-4 font-semibold uppercase">
              Code: <span className="text-[#FAC714]">Fruit28</span>
            </h2>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center pt-[70px]">
          <img
            src="/images/offerfruits.png"
            alt="Seasonal Fruit Bundle"
            className="w-full md:w-[670px]"
          />
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-[-1]"></div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalOffer;
