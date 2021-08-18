import { useEffect } from 'react'
import {
  faUserFriends,
  faFlag,
  faCaretDown,
  faPlay,
  faStore,
  faUsers,
  faEllipsisH,
  faSearch,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SIZE } from '../../helper/enum'
import { CONTACTS } from '../../data'
import Main from './Main.style'
import Modal from '../../components/Modal'
import useFetchPost from '../../hooks/useFetchPost'
import { usePostContext } from '../../context/PostContext'
import NewsFeed from '../../components/NewsFeed'
import { useAuth } from '../../auth/AuthContext'

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
    name: 'logout',
    icon: faSignOutAlt,
  },

  {
    name: 'See More',
    icon: faCaretDown,
  },
]

export default function Home() {
  const { postState } = usePostContext()
  const { fetchPosts } = useFetchPost()
  const { logout } = useAuth()
  useEffect(() => {
    async function loadPosts() {
      await fetchPosts()
    }
    loadPosts()
  }, [])
  async function handleSideNav(name: string) {
    if (name === 'logout') await logout()
  }
  return (
    <Main>
      {/* Left */}

      <Main.SideNav size={SIZE.lg}>
        <Main.List>
          {SIDENAV_ITEMS.map((item, index) => (
            <Main.List.Item
              key={index}
              onClick={() => handleSideNav(item.name)}
            >
              <span>
                <FontAwesomeIcon size='lg' icon={item.icon} />
              </span>
              <span>{item.name}</span>
            </Main.List.Item>
          ))}
        </Main.List>
      </Main.SideNav>

      {/* Middle */}

      {postState.posts && <NewsFeed posts={postState.posts} />}

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

      <Modal />
    </Main>
  )
}
