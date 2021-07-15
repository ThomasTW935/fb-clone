import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

const url = process.env.REACT_APP_ENDPOINT || '/api/posts'

interface IProps {
  privacy: String
  content: String
  userId: String
}

const useCreatePost = (postData: IProps) => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmitPost = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(url, postData)
      console.log(response)
      setLoading(false)
      history.push('/')
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }

  return { loading, handleSubmitPost }
}

export default useCreatePost
