import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "./Banner";
import { CartContext } from "../context/CartContex";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Scroll behavior for changing header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // funtionality in login and registration modal

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Handle Login Modal
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem("authToken", data.token);

        toast.success("Login successful!", {
          position: "top-center",
        });
        setIsLoginModalOpen(false);
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  // Handle Registration Modal
  const handleRegister = async () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem("authToken", data.token);
        toast.success("Registration successful!", {
          position: "top-center",
        });
        setIsSignupModalOpen(false); // Close the modal
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  // handle modal
  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
  };

  // Check if the user is authenticated by checking localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // User is logged in
    } else {
      setIsAuthenticated(false); // User is not logged in
    }
  }, []);

  
  // Clear token from localStorage and update authentication state
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    toast.success("Logout successful!", {
      position: "top-center",
    });
  };

  // Cart context
  const { cartCount, updateCartCount } = useContext(CartContext);

  useEffect(() => {
    updateCartCount();
  }, [updateCartCount]);

  return (
    <div className={`${isHomePage ? "bg" : ""}`}>
      <div
        className={`w-full fixed left-0 right-0 top-0 z-[500] transition-all duration-200 px-4 ${
          isScrolled ? "bg-grey-20 shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-7 gap-2">
          <Link to="/" className="flex items-center gap-1">
            <img src="/images/Logo-1.png" alt="logo" />
            <h1 className="md:text-[35px] text-[18px] font-bold text-black">
              Fresh Harvest
            </h1>
          </Link>
          <div className="md:flex items-center gap-[40px] text-grey-100 text-[15px] hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/uploadProduct">Upload Product</NavLink>
          </div>
          <div
            className={`${
              isHomePage ? "text-white" : "text-black"
            } flex items-center gap-5`}
          >
            <NavLink
              to="/wishList"
              className={`md:flex items-center gap-1 hidden ${
                isHomePage && !isScrolled ? "text-white" : "text-black"
              }`}
            >
              <FaHeart
                className={`${!isHomePage || isScrolled ? "text-green" : ""}`}
              />
              Favorites
            </NavLink>
            <NavLink
              to="/cart"
              className={`flex items-center gap-1  ${
                isHomePage && !isScrolled ? "text-white" : "text-black"
              }`}
            >
              <FaShoppingCart
                className={`${!isHomePage || isScrolled ? "text-green" : ""}`}
              />
              Carts
            </NavLink>
            {cartCount > 0 && (
              <span className="absolute md:top-[29px] md:right-[273px] top-[22px]  bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            {/* Show Sign in or Logout button based on authentication status */}
            {!isAuthenticated ? (
              <button
                onClick={handleLoginClick}
                className={`py-3 px-6 border rounded-lg hidden md:block ${
                  isHomePage && !isScrolled
                    ? "border-white"
                    : "border-black text-black"
                }`}
              >
                Sign in
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className={`py-3 px-6 border rounded-lg hidden md:block ${
                  isHomePage && !isScrolled
                    ? "border-white"
                    : "border-black text-black"
                }`}
              >
                Logout
              </button>
            )}
            <button
              type="button"
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                ""
              ) : (
                <RxHamburgerMenu className="text-black text-[30px]" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
        </nav>
      </div>
      {isHomePage && <Banner />}

      {/* Sidebar for Mobile with Animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[600] w-full flex flex-col bg-grey-20 p-5 gap-6"
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-1">
                <img src="/images/Logo-1.png" alt="logo" />
                <h1 className="text-[20px] font-bold text-black">
                  Fresh Harvest
                </h1>
              </Link>
              <button onClick={toggleSidebar} className="text-black">
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg">
              <NavLink to="/" onClick={toggleSidebar}>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={toggleSidebar}>
                Shop
              </NavLink>
              <NavLink to="/aboutUs" onClick={toggleSidebar}>
                About Us
              </NavLink>
              <NavLink to="/blog" onClick={toggleSidebar}>
                Blog
              </NavLink>
              <NavLink to="/uploadProduct" onClick={toggleSidebar}>
                Upload Product
              </NavLink>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="py-3 px-6 bg-primary text-white rounded-lg"
              >
                Sign in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-primary text-white rounded-lg mb-4"
            >
              Login
            </button>
            {error && <p className="text-primary text-sm">{error}</p>}
            <p className="text-center text-sm">
              Don’t have an account?
              <span
                onClick={handleSignupClick}
                className="text-primary cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Register Modal */}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleRegister}
              className="w-full py-3 bg-primary text-white rounded-lg mb-4"
            >
              Register
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <p className="text-center text-sm">
              Already have an account?
              <span
                onClick={handleLoginClick}
                className="text-primary cursor-pointer"
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
