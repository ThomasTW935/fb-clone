import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { PRIMARY_TABS, SECONDARY_TABS } from '../../data'
import Nav from './NavBar.style'
import SearchBar from '../SearchBar'
import UserProfile from '../UserProfile'

export default function NavBar() {
  const [primaryTab, setPrimaryTab] = useState(PRIMARY_TABS[0].name)
  const [secondaryTab, setSecondaryTab] = useState('')

  return (
    <Nav className='nav'>
      {/* Left */}
      <Nav.Left>
        <button style={{ border: 'none', background: 'none' }}>
          <FontAwesomeIcon icon={faFacebook} size='2x' />
        </button>
        <SearchBar />
      </Nav.Left>

      {/* Middle */}
      <Nav.Middle>
        {PRIMARY_TABS.map((tab, index) => (
          <Nav.PrimaryTab
            key={index}
            to={tab.name !== 'home' ? `/${tab.name}` : '/'}
            isactive={primaryTab === tab.name ? 1 : 0}
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
        <UserProfile />
        {SECONDARY_TABS.map((tab, index) => (
          <Nav.SecondaryTab
            key={index}
            isactive={secondaryTab === tab.name ? 1 : 0}
            onClick={() => {
              setSecondaryTab(tab.name)
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size='lg' />
          </Nav.SecondaryTab>
        ))}

        {/* <button onClick={logout}>Logout</button> */}
      </Nav.Right>
    </Nav>
  )
}
