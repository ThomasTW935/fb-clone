import axios from 'axios'
import { useState } from 'react'

const useFetchPost = () => {
  const [loading, setLoading] = useState(false)

  async function fetchPosts() {
    setLoading(true)
    try {
      const { data } = await axios.get('/api/posts')
      setLoading(false)
      return data.post
    } catch (err) {
      console.log({ error: err })
      setLoading(false)
    }
  }

  return { loading, fetchPosts }
}

export default useFetchPost
