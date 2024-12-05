import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "./Banner";
import { CartContext } from "../context/CartContex";

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLoginClick = () => {
    setLoginModalOpen(true);
    console.log("click");
  };

  const handleSignupClick = () => {
    setSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  // cart count
  const { cartCount, updateCartCount } = useContext(CartContext);

  useEffect(() => {
    updateCartCount(); 
  }, [updateCartCount]);

  return (
    <div className={`${isHomePage ? "bg" : ""}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-7">
        <Link to="/" className="flex items-center gap-1">
          <img src="/images/Logo-1.png" alt="logo image" />
          <h1 className="text-[35px] font-bold text-black">Fresh harvest</h1>
        </Link>
        <div className="flex items-center gap-[40px] text-grey-100 text-[15px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="aboutUs">About Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/uploadProduct">Upload Product</NavLink>
        </div>
        <div
          className={`${
            isHomePage ? "text-white" : "text-black"
          } flex items-center gap-5`}
        >
          <NavLink to="wishList" className="flex items-center gap-1">
            <FaHeart className={`${!isHomePage && "text-green"}`} />
            Favorites
          </NavLink>
          <NavLink to="/cart" className="flex items-center gap-1">
            <FaShoppingCart className={`${!isHomePage && "text-green"}`} />
            Carts
          </NavLink>
          {cartCount > 0 && (
            <span className="absolute top-[29px] right-[273px] bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          {/* Changed NavLink to a button */}
          <button
            onClick={handleLoginClick}
            className={`py-3 px-6 border  rounded-lg ${
              isHomePage ? "border-white" : "border-black"
            }`}
          >
            Sign in
          </button>
        </div>
      </nav>
      {isHomePage && <Banner />}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-grey-50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <button onClick={handleCloseModal} className="text-xl font-bold">
                ×
              </button>
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md mb-4"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <NavLink to="/forgot-password" className="text-sm text-blue-500">
                Forgot Password
              </NavLink>
            </div>
            <div className="mb-4">
              <button className="w-full py-3 bg-primary text-white rounded-lg">
                Login
              </button>
            </div>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <span
                onClick={handleSignupClick}
                className="text-blue-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-grey-50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Register</h2>
              <button onClick={handleCloseModal} className="text-xl font-bold">
                ×
              </button>
            </div>
            <div>
              <label className="block mb-2 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-md mb-4"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md mb-4"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md mb-4"
              />
            </div>
            <div className="mb-4">
              <button className="w-full py-3 bg-primary text-white rounded-lg">
                Register
              </button>
            </div>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <span
                onClick={handleLoginClick}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
