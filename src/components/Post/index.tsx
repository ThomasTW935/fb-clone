import React from 'react'
import Con from './Post.style'
import { IPost } from '../../interfaces'
import testImg from '../../assets/images/testImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisH,
  faGlobeAsia,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import moment, { MomentInput } from 'moment'
import { dateFormatter } from '../../helper/dateFormatter'

interface IProps {
  post: IPost
}

export default function Post({ post }: IProps) {
  const { user, createdAt } = post
  const formattedDate = dateFormatter(createdAt)
  const icon = post.privacy === 'Public' ? faGlobeAsia : faLock

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
        <button>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </Con.Head>
      <Con.Body>{post.content}</Con.Body>
      <Con.Footer></Con.Footer>
    </Con>
  )
}
