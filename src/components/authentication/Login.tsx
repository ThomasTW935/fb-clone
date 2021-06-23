import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  setIsLogin: (arg0:boolean)=>void
}

export default function Login({setIsLogin}:Props) {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading,setLoading] = useState(false)
  return (
    <div>
      <h2>Login</h2>
      <form>
        <section>
          <label>Email</label>
          <input type='text' ref={emailRef}/>
        </section>
        <section>
          <label>Password</label>
          <input type='password' ref={passwordRef}/>
        </section>
        <button className='cta' disabled={loading} type='submit'>Login</button>
      </form>
      <div>Create an account here <button className='link' onClick={()=>setIsLogin(false)}>Sign Up</button></div>
      <div>Forgot Password? <Link className='link' to='/forgot-password'>Reset Password</Link></div>
    </div>
  )
}
