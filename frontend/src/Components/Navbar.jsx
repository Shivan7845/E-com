import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Navbar = () => {  

  const items = useSelector((state) => state.cart)

  return (
    <div className='container p-4 d-flex justify-content-between align-items-center'>
        <span className='fs-4'>E-shopping</span>
        <div className='d-flex gap-5'>
            <Link className='text-decoration-none' to={"/home"}>Home</Link>
            <Link className='text-decoration-none' to={"/cart"}>Cart</Link>
            <span>
                <strong>Cart items</strong> : {items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar