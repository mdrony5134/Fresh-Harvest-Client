import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContex";

const ProductCard = ({ product }) => {
  const { product_name, price, product_image, _id, category, details } = product;
  const { updateCartCount } = useContext(CartContext);

  const handleAddToCart = async () => {
    const newCartItem = {
      productId: _id,
      product_name,
      category,
      price,
      product_image,
      details,
      quantity: 1,
    };

    try {
      // Fetch existing cart items
      const response = await fetch("http://localhost:5000/cart");
      const cartItems = await response.json();

      // Check if product is already in the cart
      const isProductInCart = cartItems.some((item) => item.productId === _id);

      if (isProductInCart) {
        toast.error("This product is already in your cart!", {
          position: "top-center",
        });
        return;
      }

      // Add the product to the cart
      const addResponse = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCartItem),
      });

      if (addResponse.ok) {
        await updateCartCount(); 
        toast.success("Product added to cart successfully!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="md:w-[280px] w-full bg-white rounded-[20px] shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <div className="bg-[#F4F6F6] p-5 rounded-[20px] flex items-center justify-center">
        <img
          src={product_image}
          alt={product_name}
          className="mdh-[150px] object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-xl font-semibold text-black">{product_name}</h1>
        <p className="text-lg text-[#4A4A52] mt-2">${price}/kg</p>
      </div>
      <div>
        <button
          onClick={handleAddToCart}
          className="w-full py-3 text-[16px] font-medium border border-gray-300 rounded-lg text-black bg-white hover:bg-primary hover:text-white transition-colors duration-200"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
