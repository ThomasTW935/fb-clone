import React from "react"
import Con from "./NewsFeed.style"
import Posts from "../Post"
import testImg from "../../assets/images/testImg.jpg"
import { useAuth } from "../../auth/AuthContext"
import { IPost } from "../../interfaces"
import { UI_ACTIONS, useUIContext } from "../../context/UIContext"

interface IProps {
  posts: IPost[]
}
export default function NewsFeed({ posts }: IProps) {
  const { currentUser } = useAuth()
  const { uiDispatch } = useUIContext()
  function handlePostModal(value: boolean) {
    uiDispatch({ type: UI_ACTIONS.SET_POST_MODAL, payload: value })
  }
  return (
    <Con>
      <Con.Head>
        <section>
          <Con.ImgCon>
            <Con.ImgCon.Img src={testImg} alt="profile" />
          </Con.ImgCon>
          <Con.Button onClick={() => handlePostModal(true)}>
            What's on your mind, {currentUser.first_name}?
          </Con.Button>
        </section>
        <section></section>
      </Con.Head>
      <Posts posts={posts} />
    </Con>
  )
}
