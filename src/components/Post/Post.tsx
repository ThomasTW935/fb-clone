import React, { useState, useRef, useEffect } from 'react'
import Con from './Post.style'
import PostFooter from './PostFooter'
import { IPost } from '../../interfaces'
import testImg from '../../assets/images/testImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisH,
  faGlobeAsia,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { dateFormatter } from '../../helper/dateFormatter'
import PostActions from './PostActions'

interface IProps {
  post: IPost
}

export default function Post({ post }: IProps) {
  const { user, createdAt } = post
  const formattedDate = dateFormatter(createdAt)
  const icon = post.privacy === 'Public' ? faGlobeAsia : faLock
  const [openActions, setOpenActions] = useState(false)
  const actionsRef = useRef<HTMLElement>(null)
  useEffect(() => {
    function handleDropdown(e: any) {
      const element = e.target as HTMLElement
      if (actionsRef.current && !actionsRef.current.contains(element)) {
        setOpenActions(false)
      }
    }
    document.addEventListener('mousedown', handleDropdown)
    return () => {
      document.removeEventListener('mousedown', handleDropdown)
    }
  }, [actionsRef])
  return (
    <Con>
      <Con.Head>
        <Con.ImgCon>
          <Con.ImgCon.Img src={testImg} alt='profile' size={19} />
        </Con.ImgCon>
        <section>
          <h4>{`${user.first_name} ${user.last_name}`}</h4>
          <div>
            {formattedDate}
            <span>&#183;</span>
            <FontAwesomeIcon icon={icon} />
          </div>
        </section>
        <Con.Actions ref={actionsRef}>
          <button onClick={() => setOpenActions(true)}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          {openActions && (
            <PostActions
              postId={post._id}
              user={user}
              setOpenActions={setOpenActions}
            />
          )}
        </Con.Actions>
      </Con.Head>
      <Con.Body>
        {post.content && <p>{post.content}</p>}
        {post.image && <img src={post.image} alt='NBA 2k21' />}
      </Con.Body>
      <PostFooter post={post} />
    </Con>
  )
}
