import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContex";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 4.99;
  const { updateCartCount } = useContext(CartContext);

  // Fetch cart data
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("https://fresh-harvest-server.vercel.app/cart");
        const data = await response.json();
        setCartItems(data);

        // Calculate subtotal
        const calculatedSubtotal = data.reduce((acc, item) => {
          const price = parseFloat(item.price) || 0;
          const quantity = parseInt(item.quantity, 10) || 0;
          return acc + price * quantity;
        }, 0);
        setSubtotal(calculatedSubtotal);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  // Delete functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fresh-harvest-server.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your cart item has been deleted.",
                icon: "success",
              });

              updateCartCount();

              // Update cart items state without refreshing the page
              const updatedCart = cartItems.filter((item) => item._id !== id);
              setCartItems(updatedCart);

              // Recalculate subtotal
              const updatedSubtotal = updatedCart.reduce((acc, item) => {
                const price = parseFloat(item.price) || 0;
                const quantity = parseInt(item.quantity, 10) || 0;
                return acc + price * quantity;
              }, 0);
              setSubtotal(updatedSubtotal);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the cart item.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting cart item:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="md:pt-40 pt-24 pb-20 min-h-screen bg-white text-[#212337]">
      <h1 className="mb-10 text-center text-3xl font-bold text-[#212337]">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold text-[#4A4A52]">
            Your Cart is Empty!
          </h2>
          <p className="mt-2 text-[#A6A6A6]">
            Start adding items to your cart now!
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {/* Cart Items */}
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col mb-6 rounded-lg bg-grey-20 p-6 shadow-md sm:flex-row sm:justify-between"
              >
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="w-full h-32 object-cover rounded-lg sm:w-40"
                />
                <div className="flex flex-col justify-between mt-4 sm:ml-4 sm:mt-0 sm:w-full">
                  <div>
                    <h2 className="text-lg font-bold text-[#212337]">
                      {item.product_name}
                    </h2>
                    <p className="mt-1 text-xs text-grey-100">
                      {item.category}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:mt-0">
                    <div className="flex items-center border border-[#D9D9D9] rounded">
                      <button className="px-3 py-1 bg-[#FF6A1A] hover:bg-[#749B3F] text-white text-sm rounded-l">
                        -
                      </button>
                      <input
                        className="w-12 text-center bg-[#F4F6F6] text-[#212337] text-sm outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                        readOnly
                      />
                      <button className="px-3 py-1 bg-[#FF6A1A] hover:bg-[#749B3F] text-white text-sm rounded-r">
                        +
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm text-[#212337]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-[#FF6A1A] hover:text-[#749B3F]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal Section */}
          <div className="mt-6 h-full rounded-lg bg-grey-20 p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between text-[#4A4A52]">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-[#4A4A52]">
              <p>Shipping</p>
              <p>${shippingCost.toFixed(2)}</p>
            </div>
            <hr className="my-4 border-[#D9D9D9]" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-[#212337]">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold text-[#212337]">
                  ${(subtotal + shippingCost).toFixed(2)} USD
                </p>
                <p className="text-sm text-[#A6A6A6]">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-[#FF6A1A] hover:bg-[#749B3F] text-white py-2 font-medium">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
