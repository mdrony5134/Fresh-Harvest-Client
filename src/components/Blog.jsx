import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto my-[75px] md:my-[150px] px-4 md:px-0">
      <div className="text-center md:w-[560px] mx-auto w-full">
        <p className="text-green bg-grey-50 text-[20px] font-medium inline-block px-3 rounded-lg">
          Our Blog
        </p>
        <h1 className="md:text-[45px] text-[30px] font-bold text-black">Fresh Harvest Blog</h1>
        <p className="text-grey-100">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="md:w-[385px] w-full">
            <img src="/images/image 2.png" alt="blog image" />
            <p className="text-grey-100 text-[14px] mt-4">May 23, 2024</p>
            <h2 className="text-[18px] font-medium text-black mb-2">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h2>
            <p className="text-primary font-semibold text-[18px] flex items-center">Read More <FaArrowRightLong /></p>
        </div>
        <div className="md:w-[385px] w-full">
            <img src="/images/image 3.png" alt="blog image" />
            <p className="text-grey-100 text-[14px] mt-4">May 23, 2024</p>
            <h2 className="text-[18px] font-medium text-black mb-2">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</h2>
            <p className="text-primary font-semibold text-[18px] flex items-center">Read More <FaArrowRightLong /></p>
        </div>
        <div className="md:w-[385px] w-full">
            <img src="/images/image 4.png" alt="blog image" />
            <p className="text-grey-100 text-[14px] mt-4">May 23, 2024</p>
            <h2 className="text-[18px] font-medium text-black mb-2">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h2>
            <p className="text-primary font-semibold text-[18px] flex items-center">Read More <FaArrowRightLong /></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
