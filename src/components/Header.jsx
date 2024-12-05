import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between py-9'>
        <div className='flex items-center gap-1'>
          <img src="/images/Logo-1.png" alt="logo image" />
          <h1 className='text-[35px] font-bold text-black'>Fresh harvest</h1>
        </div>
        <div className='flex items-center gap-16 text-grey-100'>
          <NavLink>Home</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Blog</NavLink>
        </div>
        <div className='text-white flex items-center gap-5'>
          <NavLink className="flex items-center gap-1"><FaHeart />Favorites</NavLink>
          <NavLink className="flex items-center gap-1"><FaShoppingCart />Carts</NavLink>
          <NavLink>
            <button className='py-3 px-6 border border-white rounded-lg'>Sing in</button>
          </NavLink>
        </div>
      </nav>
      {/* banner */}
      <div className='max-w-7xl mx-auto pt-[78px]'>
        <p className='text-green bg-grey-50 text-[20px] font-medium inline-block px-3 rounded-lg'>Welcome to Fresh Harvest</p>
        <h1 className='text-black text-[70px] leading-[70px] font-medium my-4'>Fresh Fruits and <br /> Vegetables</h1>
        <p className='md:w-[448px] w-full text-grey-100'>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
        <button className='py-3 px-6 bg-primary text-white rounded-lg mt-8'>Shop Now</button>
        <div className='ml-24 pt-6'>
          <img src="/images/Vectors.png" alt="vector image" />
        </div>
        <div className='md:w-[331px] w-full bg-grey-50 rounded-lg shadow-md flex items-center justify-between p-3 ml-[200px]'>
          <div>
            <h2 className='text-green font-medium'>Special Offer</h2>
            <h2 className='text-[28px] text-black font-medium'>Fresh Salad</h2>
            <h2 className='text-green font-medium text-[24px] mb-3'>Up to <span className='text-black text-[24px] font-medium'>70% off</span></h2>
            <h2 className='bg-[#176D38] text-white rounded-[50px] inline-block px-4 font-semibold uppercase'>Code: <span className='text-[#FAC714]'>Fresh25</span></h2>
          </div>
          <div> 
            <img src="/images/offers.png" alt="offer image" />
          </div>
        </div>
        <div className='mt-8 pb-12'>
          <p>Download App:</p>
          <div className='flex items-center gap-3 mt-2'>
            <img src="/images/appstore.png" alt="app store image" />
            <img src="/images/googleplay.png" alt="google play sore" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header