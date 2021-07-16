import { ChangeEvent, FormEvent, useState } from 'react'
import { useAuth } from '../../auth/AuthContext'
import useCreatePost from '../../hooks/useCreatePost'
import Con from './Modal.style'

interface IProps {
  open: boolean
  setOpen: (arg0: boolean) => void
}

export default function Modal({ open, setOpen }: IProps) {
  const { currentUser } = useAuth()

  const [postData, setPostData] = useState({
    privacy: 'Public',
    content: '',
    userId: currentUser._id,
  })
  const { loading, handleSubmitPost } = useCreatePost(postData)

  function closeModal() {
    setOpen(false)
  }
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPostData({
      ...postData,
      content: e.target.value,
    })
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    handleSubmitPost(e)
    closeModal()
  }

  return (
    <>
      {open && (
        <Con>
          <Con.Form onSubmit={handleSubmit}>
            <Con.Head>
              <p>Create Post</p>
              <button onClick={closeModal}>&times;</button>
            </Con.Head>
            <Con.Body>
              <textarea
                onChange={handleContentChange}
                placeholder="What's on your mind?"
              ></textarea>
              <button disabled={loading}>Post</button>
            </Con.Body>
          </Con.Form>
        </Con>
      )}
    </>
  )
}
