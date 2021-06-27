import axios from 'axios'
import { ChangeEvent, FormEvent,  RefObject,  useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'

type Props = {
  setIsLogin: (arg0:boolean)=>void
}

export default function Signup({setIsLogin}:Props) {
  const {signup} = useAuth()

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const minimumRef = useRef<HTMLInputElement>(null)
  const bothUpLowRef = useRef<HTMLInputElement>(null)
  const bothLetNumRef = useRef<HTMLInputElement>(null)
  const specialCharRef = useRef<HTMLInputElement>(null)


  const [loading,setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    try{
      setLoading(true)
      setError('')
      const name = nameRef.current?.value
      const firebaseResponse = await signup(emailRef.current?.value,passwordRef.current?.value)
      const newUser = {
        name: name,
        firebase_uid: firebaseResponse.user.uid
      }
      await axios.post('/api/users', newUser)
    }catch{
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  function handlePasswordChange(e:ChangeEvent<HTMLInputElement>){
    const value = e.target.value
    const error = 'error'
    const valid = 'valid'

    if(value.length < 8) handleGuide(minimumRef, error, valid)
    else handleGuide(minimumRef, valid, error)

    if(!hasLowerCase(value) || !hasUpperCase(value)) handleGuide(bothUpLowRef,error,valid)
    else handleGuide(bothUpLowRef,valid,error)

    if(!hasBothLettersAndNumbers(value)) handleGuide(bothLetNumRef,error,valid)
    else handleGuide(bothLetNumRef,valid,error)

    // if(!hasSpecialChar(value)) handleGuide(specialCharRef,error,valid)
    // else handleGuide(specialCharRef,valid,error)

    function hasLowerCase(str:string){
      return str.toUpperCase() !== str
    }
    function hasUpperCase(str:string){
      return str.toLowerCase() !== str
    }
    function hasBothLettersAndNumbers(str:string){
      let regex = /[a-zA-Z]/
      let hasNumbers = /\d/
      return regex.test(str) && hasNumbers.test(str)
    }
  }

  function handleGuide(el:RefObject<HTMLInputElement>, classToAdd:string, classToRemove:string){
    el.current?.classList.add(classToAdd)
    el.current?.classList.remove(classToRemove)
    if(classToAdd === 'error') return setLoading(true)
    setLoading(false)
  }
  async function testAxios(){
    try{
      const response = await axios.get('/api/users')
      console.log(response)
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <div className='error'>{error}</div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Name</label>
          <input type='text' ref={nameRef} required/>
        </section>
        <section>
          <label>Email</label>
          <input type='email' ref={emailRef} required/>
        </section>
        <section>
          <label>Password</label>
          <input onChange={handlePasswordChange} type='password' ref={passwordRef} required/>
          <div className='guide'>
            <span ref={minimumRef}>*Minimum of 8 Characters</span>
            <span ref={bothUpLowRef}>*A mixture of both uppercase and lowercase letters </span>
            <span ref={bothLetNumRef}>*A mixture of letters and numbers.</span>
            <span ref={specialCharRef}>*Inclusion of at least one special character, e.g., ! @ # ?  Note: do not use &#60; or &#62;</span>
          </div>
        </section>
        <button onClick={testAxios}>test</button>
        <button className='cta' disabled={loading} type='submit'>Sign Up</button>
      </form>
      <div>Already have an Account? <button className='link' onClick={()=>setIsLogin(true)}>Sign In</button></div>
    </div>
  )
}
