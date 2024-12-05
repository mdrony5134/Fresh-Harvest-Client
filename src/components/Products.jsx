import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Fetch product data
  const loadProductData = async () => {
    const fetchdata = await fetch("http://localhost:5000/products");
    const productData = await fetchdata.json();
    setProducts(productData);
    setFilteredProducts(productData);
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

  // Show only 8 product
  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto pt-[150px] pb-[110px]">
      {/* Header Section */}
      <div className="text-center w-[448px] mx-auto">
        <p className="text-green bg-grey-50 text-[20px] font-medium inline-block px-3 rounded-lg">
          Our Products
        </p>
        <h1 className="text-[45px] font-bold text-black">Our Fresh Products</h1>
        <p className="text-grey-100">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
        <div className="flex items-center gap-6 mt-4 mb-8">
          {/* Category Buttons */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`py-3 px-6 border rounded-lg text-[18px] ${
              selectedCategory === "All"
                ? "bg-green text-white"
                : "border-grey-80 text-grey-80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Fruits")}
            className={`py-3 px-6 border rounded-lg text-[18px] ${
              selectedCategory === "Fruits"
                ? "bg-green text-white"
                : "border-grey-80 text-grey-80"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setSelectedCategory("Vegetables")}
            className={`py-3 px-6 border rounded-lg text-[18px] ${
              selectedCategory === "Vegetables"
                ? "bg-green text-white"
                : "border-grey-80 text-grey-80"
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => setSelectedCategory("Salad")}
            className={`py-3 px-6 border rounded-lg text-[18px] ${
              selectedCategory === "Salad"
                ? "bg-green text-white"
                : "border-grey-80 text-grey-80"
            }`}
          >
            Salad
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsToShow.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && filteredProducts.length > 8 && (
        <div className="text-center mt-10">
          <button className="py-3 px-6 border border-primary text-primary font-semibold rounded-lg text-[18px]">
            See All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
