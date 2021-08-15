import React, { FormEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'

type Props = {
  setIsLogin: (arg0: boolean) => void
}

export default function Login({ setIsLogin }: Props) {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { loading, handleLogin, error } = useUser()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const userData = {
      email: emailRef.current?.value as string,
      password: passwordRef.current?.value as string,
    }
    handleLogin(userData)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <span>{error}</span>
        <section>
          <label>Email</label>
          <input type='text' ref={emailRef} required />
        </section>
        <section>
          <label>Password</label>
          <input type='password' ref={passwordRef} required />
        </section>
        <button className='cta' disabled={loading} type='submit'>
          Login
        </button>
      </form>
      <div>
        Create an account here{' '}
        <button className='link' onClick={() => setIsLogin(false)}>
          Sign Up
        </button>
      </div>
      <div>
        Forgot Password?{' '}
        <Link className='link' to='/forgot-password'>
          Reset Password
        </Link>
      </div>
    </div>
  )
}
