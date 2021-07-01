import React, { FormEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

type Props = {
  setIsLogin: (arg0:boolean)=>void
}

const ERRORS = {
  INVALID_EMAIL: 'auth/invalid-email',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
}

export default function Login({setIsLogin}:Props) {
  const {login} = useAuth()
  
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    try{
      setLoading(true)
      setError('')
      await login(emailRef.current?.value, passwordRef.current?.value)
    }catch(err:any){
      setError(decodeErrorMessage(err.code))
    }
    setLoading(false)
  }
  function decodeErrorMessage(error:string){
    let errorMessage = ''
  switch(error){
    case ERRORS.INVALID_EMAIL: errorMessage = 'Invalid Email'  ;break;
    case ERRORS.USER_DISABLED: errorMessage = 'User Disabled' ;break;
    case ERRORS.USER_NOT_FOUND: errorMessage = 'User not found' ;break;
    case ERRORS.WRONG_PASSWORD: errorMessage = 'Wrong password' ;break;
    default: errorMessage='Failed to login'
  }
  return errorMessage
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <span>{error}</span>
        <section>
          <label>Email</label>
          <input type='text' ref={emailRef} required/>
        </section>
        <section>
          <label>Password</label>
          <input type='password' ref={passwordRef} required/>
        </section>
        <button className='cta' disabled={loading} type='submit'>Login</button>
      </form>
      <div>Create an account here <button className='link' onClick={()=>setIsLogin(false)}>Sign Up</button></div>
      <div>Forgot Password? <Link className='link' to='/forgot-password'>Reset Password</Link></div>
    </div>
  )
}
