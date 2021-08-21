import React, { useState, useRef, useEffect } from 'react'
import Con from './Post.style'
import { IPost } from '../../interfaces'
import testImg from '../../assets/images/testImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisH,
  faGlobeAsia,
  faLock,
  faShare,
} from '@fortawesome/free-solid-svg-icons'
import { dateFormatter } from '../../helper/dateFormatter'
import PostActions from './PostActions'
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

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
      <Con.Body>{post.content}</Con.Body>
      <Con.Footer>
        <Con.Footer.Reactions>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>25</span>
          </div>
          <div>
            <span>25 Comments</span>
            <span>25 Shares</span>
          </div>
        </Con.Footer.Reactions>
        <Con.Footer.Actions>
          <Con.Footer.Button>
            <FontAwesomeIcon icon={faThumbsUp} color='black' />
            <span>Like</span>
          </Con.Footer.Button>
          <Con.Footer.Button>
            <FontAwesomeIcon icon={faComment} />
            <span>Comment</span>
          </Con.Footer.Button>
          <Con.Footer.Button>
            <FontAwesomeIcon icon={faShare} />
            <span>Share</span>
          </Con.Footer.Button>
        </Con.Footer.Actions>
      </Con.Footer>
    </Con>
  )
}
