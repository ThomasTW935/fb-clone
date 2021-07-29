import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsFeed from '../../components/NewsFeed'
import { usePostContext } from '../../context/PostContext'
import useFetchPost from '../../hooks/useFetchPost'
import Main from './Profile.style'
import Modal from '../../components/Modal'

interface userId {
  userId: string
}

export default function Profile() {
  const { userId }: userId = useParams()
  const { postState } = usePostContext()
  const { fetchPostsByUser } = useFetchPost()
  useEffect(() => {
    async function loadPosts() {
      await fetchPostsByUser(userId)
    }
    loadPosts()
  }, [])
  return (
    <Main>
      {postState.posts && <NewsFeed posts={postState.posts} />}
      <Modal />
    </Main>
  )
}
