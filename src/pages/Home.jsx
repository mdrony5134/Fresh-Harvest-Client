import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import About from '../components/About'
import SeasonalOffer from '../components/SeasonalOffer'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Products/>
      <About/>
      <SeasonalOffer/>
      <Testimonial/>
      <Blog/>
    </div>
  )
}

export default Home