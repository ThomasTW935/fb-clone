import React from 'react'
import { IPost } from '../../interfaces'
import Post from './Post'

interface IProps {
  posts: IPost[]
}

export default function Posts({ posts }: IProps) {
  return (
    <div>
      {posts.map((post: IPost) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}
