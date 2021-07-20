import React, { useState, useRef, useEffect } from 'react'
import Con from './Post.style'
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
  const [postActions, setPostActions] = useState(false)
  const actionsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleDropdown(e: any) {
      const element = e.target as HTMLElement
      console.log(element)
      if (actionsRef.current && !actionsRef.current.contains(element)) {
        setPostActions(false)
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
          <h4>{user.name}</h4>
          <div>
            {formattedDate}
            <span>&#183;</span>
            <FontAwesomeIcon icon={icon} />
          </div>
        </section>
        <Con.Actions ref={actionsRef}>
          <button onClick={() => setPostActions((value) => !value)}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          {postActions && <PostActions />}
        </Con.Actions>
      </Con.Head>
      <Con.Body>{post.content}</Con.Body>
      <Con.Footer></Con.Footer>
    </Con>
  )
}
