import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { usePostContext, POST_ACTIONS } from '../context/PostContext'
import { postsApi } from '../config/apiRoutes'

interface IPost {
  privacy: String
  content: String
  userId: String
}

const usePost = () => {
  const [loading, setLoading] = useState(false)
  const { postDispatch } = usePostContext()

  const handleCreatePost = async (postData: IPost) => {
    setLoading(true)
    try {
      const response = await axios.post(postsApi, postData)
      postDispatch({ type: POST_ACTIONS.ADD_POST, payload: response.data.post })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  const handleEditPost = async (id: string, postData: IPost) => {
    setLoading(true)
    try {
      const response = await axios.put(postsApi + `/${id}`, postData)
      postDispatch({
        type: POST_ACTIONS.UPDATE_POST,
        payload: response.data.post,
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  const handleDeletePost = async (id: string) => {
    setLoading(true)
    try {
      await axios.delete(postsApi + `/${id}`)
      postDispatch({
        type: POST_ACTIONS.DELETE_POST,
        payload: id,
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  return { loading, handleCreatePost, handleEditPost, handleDeletePost }
}

export default usePost
