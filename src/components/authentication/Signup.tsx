import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  setIsLogin: (arg0:boolean)=>void
}

export default function Login({setIsLogin}:Props) {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading,setLoading] = useState(false)
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <section>
          <label>Name</label>
          <input type='text' ref={nameRef}/>
        </section>
        <section>
          <label>Email</label>
          <input type='text' ref={emailRef}/>
        </section>
        <section>
          <label>Password</label>
          <input type='password' ref={passwordRef}/>
        </section>
        <button className='cta' disabled={loading} type='submit'>Sign Up</button>
      </form>
      <div>Already have an Account? <button className='link' onClick={()=>setIsLogin(true)}>Sign In</button></div>
    </div>
  )
}
