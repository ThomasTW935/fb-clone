import React, { useEffect, useState } from 'react'
import {
  faShare,
  faHeart,
  faThumbsUp as likedPost,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './PostFooter.style'
import { useAuth } from '../../auth/AuthContext'
import { IPost, EReact } from '../../interfaces'
import usePost from '../../hooks/usePost'

interface IProps {
  post: IPost
}

const reacts = [
  { label: 'like', icon: likedPost, bgColor: '#0572E6' },
  { label: 'heart', icon: faHeart, bgColor: 'red' },
]

export default function PostFooter({ post }: IProps) {
  const { _id: postId, user, reactions } = post
  const comments = 50
  const shares = 0
  const [react, setReact] = useState('')
  const { currentUser } = useAuth()
  const { handleReactions } = usePost()
  const [postReact, setPostReact] = useState<{
    label: string
    icon: IconDefinition
    bgColor: string
  }>({ label: 'like', icon: faThumbsUp, bgColor: 'black' })

  useEffect(() => {
    const result = reactions.filter(
      (reaction) => currentUser._id === reaction.user._id
    )
    if (result[0] !== null && result[0] !== undefined) setReact(result[0].react)
  }, [])

  useEffect(() => {
    let selectedReact = reacts.filter(({ label }) => label === react)[0]
    if (!selectedReact) {
      selectedReact = {
        label: 'like',
        icon: faThumbsUp,
        bgColor: 'black',
      }
    }
    setPostReact(selectedReact)
  }, [react])

  function setReaction(label: string) {
    setReact(label)
    handleReactions(postId, currentUser._id, label, reactions)
  }
  return (
    <Footer>
      <Footer.Stats>
        <section>
          {reactions.length > 0 && (
            <div>
              <FontAwesomeIcon icon={faThumbsUp} color={'#0572E6'} />
              <span>{reactions.length}</span>
            </div>
          )}
        </section>
        <div>
          {comments > 0 && <span>{comments} Comments</span>}
          {shares > 0 && <span>{shares} Shares</span>}
        </div>
      </Footer.Stats>
      <Footer.Actions>
        <div>
          <Footer.Reactions>
            {reacts.map((react) => (
              <Footer.React
                bgColor={react.bgColor}
                onClick={() => {
                  setReaction(react.label)
                }}
              >
                <span>{react.label}</span>
                <FontAwesomeIcon color={'white'} icon={react.icon} />
              </Footer.React>
            ))}
          </Footer.Reactions>
          <Footer.Button
            bgColor={postReact.bgColor}
            onClick={() => {
              setReaction(react === '' ? postReact.label : '')
            }}
          >
            <FontAwesomeIcon icon={postReact.icon} />
            <span>{postReact.label}</span>
          </Footer.Button>
        </div>
        <Footer.Button>
          <FontAwesomeIcon icon={faComment} />
          <span>Comment</span>
        </Footer.Button>
        {user._id !== currentUser._id && (
          <Footer.Button>
            <FontAwesomeIcon icon={faShare} />
            <span>Share</span>
          </Footer.Button>
        )}
      </Footer.Actions>
    </Footer>
  )
}
