import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate();

  const submitHandler = (e) =>{
    e.preventDefault();
    axios.post('https://e-com-api-bice.vercel.app/signin', {email,password})
    .then(result => {
      console.log(result)
      if(result.data === 'success'){
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
       <div className='d-flex justify-content-center align-items-center bg-primary  vh-100'>
      <div className='p-3 rounded w-25 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h1 className='text-center'>Login</h1>
        <form onSubmit={submitHandler} >
         
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
          <button type='submit' className='btn btn-primary w-100 rounded-0'>Login</button>
        </form>
          <br />
          <p className='my-2 text-center'>Don't have an account</p>
          <Link to={'/signup'} className=' btn btn-light border w-100'>Signup</Link>
      </div>
    </div>
    </div>
  )
}

export default Login