import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import testImg from '../../assets/images/testImg.jpg'
import { PRIMARY_TABS, SECONDARY_TABS } from '../../data'
import Nav from './NavBar.style'
import SearchBar from '../SearchBar'

export default function NavBar() {
  const [primaryTab, setPrimaryTab] = useState(PRIMARY_TABS[0].name)
  const [secondaryTab, setSecondaryTab] = useState('')
  const [searchOnFocus, setSearchInFocus] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const { logout, currentUser } = useAuth()
  function searchIconClick() {
    setSearchInFocus(true)
    searchRef.current?.focus()
  }

  return (
    <Nav className='nav'>
      {/* Left */}
      <Nav.Left>
        {!searchOnFocus && (
          <button className='logo'>
            <FontAwesomeIcon
              className='logo__icon'
              icon={faFacebook}
              size='2x'
            />
          </button>
        )}
        <SearchBar />
      </Nav.Left>

      {/* Middle */}
      <Nav.Middle>
        {PRIMARY_TABS.map((tab, index) => (
          <Nav.PrimaryTab
            key={index}
            to={tab.name !== 'home' ? `/${tab.name}` : '/'}
            isActive={primaryTab === tab.name}
            onClick={() => {
              setPrimaryTab(tab.name)
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size='lg' />
          </Nav.PrimaryTab>
        ))}
      </Nav.Middle>

      {/* Right */}
      <Nav.Right>
        <Nav.Profile>
          <Nav.ImgCon className='profile__imageCon'>
            <Nav.ImgCon.Img src={testImg} alt='Profile' />
          </Nav.ImgCon>
          <span>{currentUser.name}</span>
        </Nav.Profile>
        {SECONDARY_TABS.map((tab, index) => (
          <Nav.SecondaryTab
            key={index}
            isActive={secondaryTab === tab.name}
            onClick={() => {
              setSecondaryTab(tab.name)
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size='lg' />
          </Nav.SecondaryTab>
        ))}

        <button onClick={logout}>Logout</button>
      </Nav.Right>
    </Nav>
  )
}
