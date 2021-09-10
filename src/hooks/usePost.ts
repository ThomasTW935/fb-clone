import axios from 'axios'
import { useState } from 'react'
import { usePostContext, POST_ACTIONS } from '../context/PostContext'
import { postsApi } from '../config/apiRoutes'
import { IReaction, EReact } from '../interfaces'
import { useAuth } from '../auth/AuthContext'

interface IPost {
  privacy: String
  content: String
  userId: String
}

const usePost = () => {
  const [loading, setLoading] = useState(false)
  const { postDispatch } = usePostContext()
  const { getUser } = useAuth()

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
  const handleReactions = async (
    postId: string,
    userId: string,
    react: string,
    reactions: IReaction[]
  ) => {
    setLoading(true)
    try {
      setLoading(false)
      await axios.put(postsApi + `/${postId}/reactions`, {
        userId: userId,
        react: react,
      })
      const filterReactions = reactions.find(
        (reaction: IReaction) => reaction.user._id.toString() === userId
      )
      if (filterReactions === undefined && react === '')
        return console.log({ error: 'react to a post' })

      if (filterReactions !== undefined && react === '')
        return postDispatch({
          type: POST_ACTIONS.REMOVE_REACT,
          payload: { postId: postId, userId: userId },
        })
      if (filterReactions !== undefined && react !== '')
        return postDispatch({
          type: POST_ACTIONS.UPDATE_REACT,
          payload: { postId: postId, userId: userId, react: react as EReact },
        })

      postDispatch({
        type: POST_ACTIONS.ADD_REACT,
        payload: { postId: postId, react: react as EReact, user: getUser() },
      })
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  return {
    loading,
    handleCreatePost,
    handleEditPost,
    handleDeletePost,
    handleReactions,
  }
}

export default usePost
