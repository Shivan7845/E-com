import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  
  const submitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/register', {name,email,password})
    .then(result => console.log(result),
      navigate('/')
    )
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='p-3 rounded w-25 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h1 className='text-center'>Register</h1>
        <form onSubmit={submitHandler}>
          <div className='mb-3'>
          <label htmlFor='email'><b>Name</b></label>
          <input type="text" placeholder='Enter Name' autoComplete='off' name = 'name' className='form-control rounded-0'
            onChange={(e) => setName(e.target.value)}
           />
          </div>
          <div className='mb-3'>
          <label htmlFor='email'><b>Email</b></label>
          <input type="email" placeholder='Enter Email' autoComplete='off' name = 'email' className='form-control rounded-0' 
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className='mb-3'>
          <label htmlFor='email'><b>Password</b></label>
          <input type="password" placeholder='Enter Password' name = 'password' className='form-control rounded-0'
            onChange={(e)=> setPassword(e.target.value)}
          />
          </div>
          <button type='submit' className='btn btn-primary w-100 rounded-0'>Register</button>
          <br />
          <p className='my-2 text-center'>Already have an account</p>
          <Link to={'/'} className=' btn btn-light border w-100'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup