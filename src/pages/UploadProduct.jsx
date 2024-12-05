import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    category: "",
    price: "",
    details: "",
    product_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product Added Successfully 🥰",
          });

          setProductData({
            product_name: "",
            category: "",
            price: "",
            details: "",
            product_image: "",
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="py-[25px] md:py-[50px]">
          <Link
            to="/"
            className="text-[22px] md:text-[40px] text-[#374151] btn flex items-center gap-3"
          >
            <FaArrowLeftLong />
            Back To Home
          </Link>
        </div>
        <div className="bg-[#F4F3F0] md:px-[120px] py-[35px]  md:py-[70px] rounded-lg shadow-lg p-6">
          <h1 className="font-medium mb-6 text-[#374151] text-[25px] md:text-[45px] text-center">
            Add New Product
          </h1>
          <p className="text-[#1B1A1AB3] md:text-center my-4 mdmy-8">
            Planning your next adventure or seeking educational opportunities
            abroad? Add and manage visas effortlessly with our comprehensive
            visa management system. Ensure every detail is captured, from
            processing times to required documents, all in one place
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label
                  for="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="product_name"
                  value={productData.product_name}
                  onChange={handleChange}
                  id="card-number"
                  placeholder="Enter Product name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prodcut Category
                </label>
                <select
                  name="category"
                  id="visa_type"
                  value={productData.category}
                  onChange={handleChange}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="" defaultChecked>
                    Select Category
                  </option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Salad">Salad</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  id="cvv"
                  placeholder="Product price"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Details
                </label>
                <input
                  type="text"
                  name="details"
                  value={productData.details}
                  onChange={handleChange}
                  id="card-holder"
                  placeholder="Product details"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="card-holder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Product Image URL
              </label>
              <input
                type="text"
                name="product_image"
                value={productData.product_image}
                onChange={handleChange}
                id="card-holder"
                placeholder="Enter product image URL"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green border text-white font-medium py-3 rounded-lg focus:outline-none btn text-[24px]"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
