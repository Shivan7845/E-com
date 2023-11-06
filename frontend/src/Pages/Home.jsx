import React from 'react'
import Product from '../Components/Products'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr />
        <h3 className='text-center my-4'>Welcome to the E-shopping Products</h3>
        <section>
            <Product />
        </section>
    </div>
  )
}

export default Home