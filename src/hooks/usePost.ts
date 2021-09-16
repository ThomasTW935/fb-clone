import axios from 'axios'
import { useState } from 'react'
import { usePostContext, POST_ACTIONS } from '../context/PostContext'
import { postsApi } from '../config/apiRoutes'
import { IReaction, EReact } from '../interfaces'
import { useAuth } from '../auth/AuthContext'
import { storage } from '../firebase'

interface IPost {
  privacy: String
  content: String
  userId: String
}

const usePost = () => {
  const [loading, setLoading] = useState(false)
  const { postDispatch } = usePostContext()
  const { getUser, currentUser } = useAuth()

  const handleCreatePost = async (postData: IPost, file: File | undefined) => {
    setLoading(true)
    try {
      postData.userId = currentUser._id
      const response = await axios.post(postsApi, {
        ...postData,
        hasMedia: file !== undefined,
      })
      const post = response.data.post
      postDispatch({ type: POST_ACTIONS.ADD_POST, payload: post })
      if (file !== undefined) {
        handleImagePost(post._id, file)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  const handleEditPost = async (
    id: string,
    postData: IPost,
    file: File | undefined
  ) => {
    setLoading(true)
    try {
      const response = await axios.put(postsApi + `/${id}`, postData)
      postDispatch({
        type: POST_ACTIONS.UPDATE_POST,
        payload: response.data.post,
      })
      if (file !== undefined) {
        handleImagePost(id, file)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log({ error: err })
    }
  }
  const handleImagePost = async (id: string, file: File) => {
    setLoading(true)
    try {
      const uploadTask = storage.ref(`/photos/${file.name}`).put(file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        () => {},
        async () => {
          const url = await uploadTask.snapshot.ref.getDownloadURL()
          await axios.put(postsApi + `/${id}/photo`, {
            image: url,
          })
          postDispatch({
            type: POST_ACTIONS.UPDATE_POST_IMAGE,
            payload: { _id: id, image: url },
          })
          setLoading(false)
        }
      )
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
