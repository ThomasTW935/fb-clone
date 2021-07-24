import axios from 'axios'
import { useState } from 'react'
import { usePostContext, POST_ACTIONS } from '../context/PostContext'

const useFetchPost = () => {
  const [loading, setLoading] = useState(false)
  const { postDispatch } = usePostContext()
  async function fetchPosts() {
    setLoading(true)
    try {
      const { data } = await axios.get('/api/posts')
      if (data) {
        postDispatch({ type: POST_ACTIONS.SET_POSTS, payload: data.posts })
      }
      setLoading(false)
    } catch (err) {
      console.log({ error: err })
      setLoading(false)
    }
  }

  return { loading, fetchPosts }
}

export default useFetchPost
