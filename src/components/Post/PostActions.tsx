import React from 'react'
import Con from './Post.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

function PostActions() {
  return (
    <Con.List>
      <Con.List.Item>
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
