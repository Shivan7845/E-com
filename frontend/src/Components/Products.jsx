import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CreateSlice';
import { STATUSES, fetchProduct } from '../Store/ProductSlice';

const Product = () => {
    // const [product, setproduct] = useState([]);
    const dispatch = useDispatch();
    const {data :product , status} = useSelector((state) => state.product)

    // const fetchProduct = async () =>{
    //     const {data} = await axios.get('https://fakestoreapi.com/products');
    //     // console.log(data)
    //     setproduct(data)
    // };
    useEffect(() => {
      dispatch(fetchProduct())
    }, [])
    // const handleAdd = (elem) =>{
    //     dispatch(add(elem))
    // }

    if(status === STATUSES.LOADING){
      return <h2>Loading...</h2>
    }
    if(status === STATUSES.ERROR){
      return <h2>Something went wrong!</h2>
    }
  return (
    <div className='container'>
        {product.map((elem) =>{
          return (
            <div key={elem.id} className='card p-3 mb-5'>
            <img src={elem.image} alt="" />
            <div className="content p-1">
            <h5 className='text-center my-2'>{elem.title}</h5>
            <h5>Price ₹{elem.price}</h5>
            <h6>Rating {elem.rating.rate}</h6>
            <button onClick={() => dispatch(add(elem))}>Add to cart</button>
            </div>
    </div>
          )
        })}
    </div>
  )
}

export default Product