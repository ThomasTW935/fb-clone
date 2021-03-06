import axios from 'axios'
import { useState } from 'react'
import { usePostContext, POST_ACTIONS } from '../context/PostContext'
import { postsApi } from '../config/apiRoutes'

const useFetchPost = () => {
  const [loading, setLoading] = useState(false)
  const { postDispatch } = usePostContext()
  async function fetchPosts() {
    setLoading(true)
    try {
      const { data } = await axios.get(postsApi)
      if (data) {
        postDispatch({ type: POST_ACTIONS.SET_POSTS, payload: data.posts })
      }
      setLoading(false)
    } catch (err) {
      console.log({ error: err })
      setLoading(false)
    }
  }
  async function fetchPostsByUser(userId: string) {
    setLoading(true)
    try {
      const { data } = await axios.get(postsApi + `/${userId}`)
      if (data) {
        postDispatch({ type: POST_ACTIONS.SET_POSTS, payload: data.posts })
      }
      setLoading(false)
    } catch (err) {
      console.log({ error: err })
      setLoading(false)
    }
  }

  return { loading, fetchPosts, fetchPostsByUser }
}

export default useFetchPost
