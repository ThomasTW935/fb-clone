import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading,setLoading] = useState(false)
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <section>
          <label>Email</label>
          <input type='text' ref={emailRef}/>
        </section>
        <section>
          <label>Password</label>
          <input type='password' ref={passwordRef}/>
        </section>
        <button disabled={loading} type='submit'>Log In</button>
      </form>
      <div>Create an account here <Link to='/signup'>Sign Up</Link></div>
      <div>Forgot Password? <Link to='/forgot-password'>Reset Password</Link></div>
    </div>
  )
}
