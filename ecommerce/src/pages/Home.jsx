import React from 'react'
import Announcement from '../compenents/Announcement'
import Categories from '../compenents/Categories'
import Footer from '../compenents/Footer'
import Navbar from '../compenents/Navbar'
import NewsLetter from '../compenents/NewsLetter'
import Products from '../compenents/Products'
import Slider from '../compenents/Slider'

export default function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />

    </div>
  )
}
