import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faPlay,
  faStore,
  faUsers,
  faPlus,
  faBell,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import testImg from './assets/images/testImg.jpg'
export const CONTACTS = [
  {
    name: 'Maria Sophia P. Senillo',
    profile_picture: testImg,
    online: true,
  },
  {
    name: 'Czar Camua',
    profile_picture: testImg,
    online: false,
  },
  {
    name: 'Aries Dario',
    profile_picture: testImg,
    online: true,
  },
  {
    name: 'Karl Cris Bo',
    profile_picture: testImg,
    online: true,
  },
  {
    name: 'Allyssa Antonio',
    profile_picture: testImg,
    online: false,
  },
]

export const PRIMARY_TABS = [
  {
    name: 'home',
    icon: faHome,
  },
  {
    name: 'watch',
    icon: faPlay,
  },
  {
    name: 'marketplace',
    icon: faStore,
  },
  {
    name: 'group',
    icon: faUsers,
  },
]
export const SECONDARY_TABS = [
  {
    name: 'plus',
    icon: faPlus,
  },
  {
    name: 'messenger',
    icon: faFacebookMessenger,
  },
  {
    name: 'bell',
    icon: faBell,
  },
  {
    name: 'downArrow',
    icon: faCaretDown,
  },
]
