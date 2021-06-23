import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Contacts() {
  const contacts = [
    {
      name: "Maria Sophia P. Senillo",
      profile_picture: "../testImg.jpg",
      online: true,
    },
    {
      name: "Czar Camua",
      profile_picture: "../testImg.jpg",
      online: false,
    },
    {
      name: "Aries Dario",
      profile_picture: "../testImg.jpg",
      online: true,
    },
    {
      name: "Karl Cris Bo",
      profile_picture: "../testImg.jpg",
      online: true,
    },
    {
      name: "Allyssa Antonio",
      profile_picture: "../testImg.jpg",
      online: false,
    },
  ];
  return (
    <section className="contacts">
    <div className="contacts__head">
      <span>Contacts</span>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
    <ul className="contacts__list">
      {contacts.map((contact,index) => (
        <li key={index} className="contacts__item">
          <div className={contact.online ? 'online' : ''}>
            <img src={contact.profile_picture} alt="profile picture" />
          </div>
          <span>{contact.name}</span>
        </li>
      ))}
    </ul>
  </section>
  )
}
