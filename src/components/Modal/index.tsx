import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../../auth/AuthContext'
import { usePostContext, POST_ACTIONS } from '../../context/PostContext'
import { useUIContext, UI_ACTIONS } from '../../context/UIContext'
import useCreatePost from '../../hooks/useCreatePost'
import Con from './Modal.style'

export default function Modal() {
  const { currentUser } = useAuth()
  const { postState, postDispatch } = usePostContext()
  const { uiState, uiDispatch } = useUIContext()
  const [postData, setPostData] = useState({
    privacy: 'Public',
    content: '',
    userId: currentUser._id,
  })
  const { loading, handleSubmitPost } = useCreatePost(postData)

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPostData({
      ...postData,
      content: e.target.value,
    })
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    handleSubmitPost(e)
  }
  function closeModal() {
    uiDispatch({ type: UI_ACTIONS.SET_POST_MODAL, payload: false })
    postDispatch({ type: POST_ACTIONS.SET_SELECTED_POST, payload: '' })
  }
  useEffect(() => {
    if (postState.selectedPost !== '') {
      const post = postState.posts.filter(
        (post) => post._id === postState.selectedPost
      )[0]
      setPostData({
        privacy: post.privacy,
        content: post.content,
        userId: post.user._id,
      })
    }
  }, [postState.selectedPost])
  const title = postState.selectedPost === '' ? 'Create Post' : 'Edit Post'
  return (
    <>
      {uiState.postModal && (
        <Con>
          <Con.Form onSubmit={handleSubmit}>
            <Con.Head>
              <p>{title}</p>
              <button onClick={closeModal}>&times;</button>
            </Con.Head>
            <Con.Body>
              <textarea
                onChange={handleContentChange}
                placeholder="What's on your mind?"
                value={postData.content}
              />
              <button disabled={loading}>Post</button>
            </Con.Body>
          </Con.Form>
        </Con>
      )}
    </>
  )
}
