import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../auth/AuthContext'
import { usersApi } from '../config/apiRoutes'
import { IUserData } from '../interfaces'

// const ERRORS = {
//   INVALID_EMAIL: 'auth/invalid-email',
//   USER_DISABLED: 'auth/user-disabled',
//   USER_NOT_FOUND: 'auth/user-not-found',
//   WRONG_PASSWORD: 'auth/wrong-password',
// }

// function decodeErrorMessage(error: string) {
//   let errorMessage = ''
//   switch (error) {
//     case ERRORS.INVALID_EMAIL:
//       errorMessage = 'Invalid Email'
//       break
//     case ERRORS.USER_DISABLED:
//       errorMessage = 'User Disabled'
//       break
//     case ERRORS.USER_NOT_FOUND:
//       errorMessage = 'User not found'
//       break
//     case ERRORS.WRONG_PASSWORD:
//       errorMessage = 'Wrong password'
//       break
//     default:
//       errorMessage = 'Failed to login'
//   }
//   return errorMessage
// }

const useUser = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signup, login } = useAuth()

  async function handleSignup(userData: IUserData) {
    try {
      setLoading(true)
      setError('')
      const firebaseResponse = await signup(userData.email, userData.password)
      const newUser = {
        firstName: userData.first_name,
        lastName: userData.first_name,
        firebase_uid: firebaseResponse.user.uid,
      }
      await axios.post(usersApi, newUser)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  async function handleLogin(userData: { email: string; password: string }) {
    try {
      setLoading(true)
      setError('')
      await login(userData.email, userData.password)
    } catch (err) {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return { loading, setLoading, error, handleSignup, handleLogin }
}

export default useUser
