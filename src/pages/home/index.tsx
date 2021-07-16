import {
  faUserFriends,
  faFlag,
  faCaretDown,
  faPlay,
  faStore,
  faUsers,
  faEllipsisH,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../auth/AuthContext'
import testImg from '../../assets/images/testImg.jpg'

import { SIZE } from '../../helper/enum'
import { CONTACTS } from '../../data'
import Main from './Main.style'
import Modal from '../../components/Modal'
import Post from '../../components/Post'
import { useEffect, useState } from 'react'
import useFetchPost from '../../hooks/useFetchPost'
import { IPost } from '../../interfaces'
import { usePostContext } from '../../context/PostContext'

const SIDENAV_ITEMS = [
  {
    name: 'friends',
    icon: faUserFriends,
  },
  {
    name: 'Pages',
    icon: faFlag,
  },
  {
    name: 'groups',
    icon: faUsers,
  },
  {
    name: 'marketplace',
    icon: faStore,
  },
  {
    name: 'watch',
    icon: faPlay,
  },

  {
    name: 'See More',
    icon: faCaretDown,
  },
]

export default function Home() {
  const { currentUser } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const { postState } = usePostContext()
  const { fetchPosts } = useFetchPost()
  useEffect(() => {
    async function loadPosts() {
      await fetchPosts()
    }
    loadPosts()
  }, [fetchPosts])
  return (
    <Main>
      {/* Left */}

      <Main.SideNav size={SIZE.lg}>
        <Main.List>
          {SIDENAV_ITEMS.map((item, index) => (
            <Main.List.Item key={index}>
              <span>
                <FontAwesomeIcon size='lg' icon={item.icon} />
              </span>
              <span>{item.name}</span>
            </Main.List.Item>
          ))}
        </Main.List>
      </Main.SideNav>

      {/* Middle */}

      <Main.NewsFeed>
        <Main.NewsFeed.Head>
          <section>
            <Main.ImgCon>
              <Main.ImgCon.Img src={testImg} alt='profile' />
            </Main.ImgCon>
            <Main.NewsFeed.Button onClick={() => setOpenModal(true)}>
              What's on your mind, {currentUser.name}?
            </Main.NewsFeed.Button>
          </section>
          <section></section>
        </Main.NewsFeed.Head>
        <Main.NewsFeed.Post>
          {postState.posts.map((post: IPost) => (
            <Post key={post._id} post={post} />
          ))}
        </Main.NewsFeed.Post>
      </Main.NewsFeed>

      {/* Right */}
      <Main.SideNav size={SIZE.md}>
        <Main.Head>
          <span>Contacts</span>
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </Main.Head>
        <Main.List>
          {CONTACTS.map((contact, index) => (
            <Main.List.Item key={index}>
              <Main.ImgCon isOnline={contact.online}>
                <Main.ImgCon.Img src={contact.profile_picture} alt='profile' />
              </Main.ImgCon>
              <span>{contact.name}</span>
            </Main.List.Item>
          ))}
        </Main.List>
      </Main.SideNav>

      <Modal open={openModal} setOpen={setOpenModal} />
    </Main>
  )
}
