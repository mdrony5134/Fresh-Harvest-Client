import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch product data
  const loadProductData = async () => {
    try {
      const response = await fetch("https://fresh-harvest-server.vercel.app/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const productData = await response.json();
      setProducts(productData);
      setFilteredProducts(productData);
    } catch (error) {
      console.error("Error fetching product data:", error.message);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  // Filter products whenever selectedCategory changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return (
    <div className="max-w-7xl mx-auto pt-[150px] pb-[60px] md:pb-[110px] flex gap-12 flex-col md:flex-row">
      {/* Left Sidebar for Categories */}
      <div className="w-[250px] mx-auto md:mx-0">
        <h2 className="text-[24px] font-bold text-black mb-6">Categories</h2>
        <div className="flex flex-col gap-4 justify-center">
          {/* Category Buttons */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`py-3 px-4 text-left border rounded-lg text-[18px] w-full ${
              selectedCategory === "All"
                ? "bg-green text-white"
                : "border-grey-50 text-grey-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Fruits")}
            className={`py-3 px-4 text-left border rounded-lg text-[18px] w-full ${
              selectedCategory === "Fruits"
                ? "bg-green text-white"
                : "border-grey-50 text-grey-100"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setSelectedCategory("Vegetables")}
            className={`py-3 px-4 text-left border rounded-lg text-[18px] w-full ${
              selectedCategory === "Vegetables"
                ? "bg-green text-white"
                : "border-grey-50 text-grey-100"
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => setSelectedCategory("Salad")}
            className={`py-3 px-4 text-left border rounded-lg text-[18px] w-full ${
              selectedCategory === "Salad"
                ? "bg-green text-white"
                : "border-grey-50 text-grey-100"
            }`}
          >
            Salad
          </button>
        </div>
      </div>

      {/* Right Section for Products */}
      <div className="flex-1 text-center px-4">
        <h1 className="md:text-[45px] text-[30px] font-bold text-black mb-6">
          Our Fresh Products
        </h1>
        <p className="text-grey-100 mb-8">
          We pride ourselves on offering a wide variety of fresh and flavorful <br />
          fruits, vegetables, and salad ingredients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-gray-600">No products found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
