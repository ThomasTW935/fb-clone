import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import Profile from './UserProfile.style'
import testImg from '../../assets/images/testImg.jpg'

export default function UserProfile() {
  const { currentUser } = useAuth()
  return (
    <Profile to={`/${currentUser._id}`}>
      <Profile.ImgCon className='profile__imageCon'>
        <Profile.ImgCon.Img src={testImg} alt='Profile' />
      </Profile.ImgCon>
      <span>{currentUser.first_name}</span>
    </Profile>
  )
}
