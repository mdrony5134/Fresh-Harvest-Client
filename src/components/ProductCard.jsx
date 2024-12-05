import React from "react";

const ProductCard = ({ product }) => {
  const { product_name, category, price, details, product_image } = product;

  return (
    <div className="w-[280px] bg-white rounded-[20px] shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Image Section */}
      <div className="bg-[#F4F6F6] p-5 rounded-[20px] flex items-center justify-center">
        <img
          src={product_image}
          alt={product_name}
          className="h-[150px] object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 text-center">
        <h1 className="text-xl font-semibold text-black">{product_name}</h1>
        <p className="text-lg  text-[#4A4A52] mt-2">${price}/kg</p>
      </div>

      {/* Button Section */}
      <div className="">
        <button className="w-full py-3 text-[16px] font-medium border border-gray-300 rounded-lg text-black bg-white hover:bg-primary hover:text-white transition-colors duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
