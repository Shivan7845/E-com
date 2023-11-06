import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove } from '../Store/CreateSlice'
import Navbar from '../Components/Navbar'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)
  return (
    <div className=''>
      <Navbar />
      <hr />
      <h3 className='text-center mb-3'>Cart</h3>
      <ul className='list-unstyled '>
        {
          products.map(product =>{
            return(
              <li key={product.id} className='alert alert-light '>
                <div className='d-flex justify-content-between align-items-center p-3'>
                <img style={{height : "100px"}}  src={product.image} alt="" />
                <h5 className=''>{product.title}</h5>
                <h5>Price ₹{product.price}</h5>
                <button className='btn btn-primary' onClick={() => dispatch(remove(product.id))}>Remove</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Cart