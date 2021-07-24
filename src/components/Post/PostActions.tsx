import React from 'react'
import Con from './Post.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { usePostContext, POST_ACTIONS } from '../../context/PostContext'
import { useUIContext, UI_ACTIONS } from '../../context/UIContext'
interface IProps {
  postId: string
  setOpenActions: (arg: boolean) => void
}

function PostActions({ postId, setOpenActions }: IProps) {
  const { postDispatch } = usePostContext()
  const { uiDispatch } = useUIContext()

  function handleEdit() {
    postDispatch({ type: POST_ACTIONS.SET_SELECTED_POST, payload: postId })
    uiDispatch({ type: UI_ACTIONS.SET_POST_MODAL, payload: true })
    setOpenActions(false)
  }

  return (
    <Con.List>
      <Con.List.Item onClick={handleEdit}>
        <FontAwesomeIcon icon={faEdit} />
        <span>Edit post</span>
      </Con.List.Item>
      <Con.List.Item>
        <FontAwesomeIcon icon={faTrashAlt} />
        <span>Move to trash</span>
      </Con.List.Item>
    </Con.List>
  )
}

export default PostActions
