import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from "../components/Heroimage"
import Footer from "../components/Footer"
import Pricingcard from '../components/Pricingcard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage/>
      <Pricingcard/>
      <Footer />
    </div>
  )
}

export default Home
