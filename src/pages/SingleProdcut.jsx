import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch the single product data
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fresh-harvest-server.vercel.app/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div>Loading...</div>;
  }

  const { product_name, category, price, details, product_image, _id } =
    product;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product_image}
            alt={product_name}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="bg-grey-50 text-green text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {category}
          </span>
          <h1 className="text-[40px] font-bold text-black mt-4">
            {product_name}
          </h1>
          <div className="flex items-center mt-2">
            <span className="text-[#FFB848]">★★★★★</span>
            <span className="ml-2 text-sm text-grey-100">5.0(1 review)</span>
          </div>
          <p className="text-[32px] font-semibold text-primary mt-4">
            ${price}/kg
          </p>
          <p className="text-grey-100 mt-4">{details}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <span className="text-grey-100 font-bold mr-4">Quantity</span>
            <button
              onClick={decrementQuantity}
              className="bg-grey-50 text-grey-100 px-3 py-1 rounded-l border border-gray-300"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b py-1 border-gray-300 font-bold text-grey-100 bg-grey-50 focus:outline-none"
            />
            <button
              onClick={incrementQuantity}
              className="bg-grey-50 text-grey-100 px-3 py-1 rounded-r border border-gray-300"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-md">
              <span>❤️</span> Save as favorite
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow-md">
              🛒 Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
