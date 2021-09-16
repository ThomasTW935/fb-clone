import { FormEvent, useRef } from 'react'
import useUser from '../../hooks/useUser'
import Con from './Authentication.style'

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
    <Con>
      <h2>Login</h2>
      <Con.Form onSubmit={handleSubmit}>
        <span>{error}</span>
        <Con.Section>
          <label>Email</label>
          <input type='text' ref={emailRef} required />
        </Con.Section>
        <Con.Section>
          <label>Password</label>
          <input type='password' ref={passwordRef} required />
        </Con.Section>
        <Con.CTA disabled={loading} type='submit'>
          Login
        </Con.CTA>
      </Con.Form>
      <div>
        Create an account here{' '}
        <Con.Button onClick={() => setIsLogin(false)}>Sign Up</Con.Button>
      </div>
      <div>
        Forgot Password?{' '}
        <Con.Link to='/forgot-password'>Reset Password</Con.Link>
      </div>
    </Con>
  )
}
