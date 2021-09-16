import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { usePostContext, POST_ACTIONS } from '../../context/PostContext'
import { useUIContext, UI_ACTIONS } from '../../context/UIContext'
import usePost from '../../hooks/usePost'
import Con from './Modal.style'

export default function Modal() {
  const { postState, postDispatch } = usePostContext()
  const { uiState, uiDispatch } = useUIContext()
  const [postData, setPostData] = useState({
    privacy: 'Public',
    content: '',
    userId: '',
    image: '',
  })
  const [file, setFile] = useState<File>()
  const { loading, handleCreatePost, handleEditPost } = usePost()

  function closeModal() {
    uiDispatch({ type: UI_ACTIONS.SET_POST_MODAL, payload: false })
    postDispatch({ type: POST_ACTIONS.SET_SELECTED_POST, payload: '' })
  }

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPostData({
      ...postData,
      content: e.target.value,
    })
  }
  function handleMedia(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null) {
      const file = e.target.files[0]
      setFile(file)
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (postState.selectedPost !== '') {
      handleEditPost(postState.selectedPost, postData, file)
      closeModal()
      return
    }
    handleCreatePost(postData, file)
    closeModal()
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
        image: post.image,
      })
    }
  }, [postState.selectedPost])
  const title = postState.selectedPost === '' ? 'Create Post' : 'Edit Post'
  const button = postState.selectedPost === '' ? 'Post' : 'Save'
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
              <label>
                Upload File
                <input type='file' onChange={handleMedia} />
              </label>
              <button disabled={loading}>{button}</button>
            </Con.Body>
          </Con.Form>
        </Con>
      )}
    </>
  )
}
