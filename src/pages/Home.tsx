import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
    <main className="home">
      {/* Left */}
      <section></section>
      {/* Middle */}
      {/* Right */}
      <section className="contacts">
        <div className="contacts__head">
          <span>Contacts</span>
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
        <ul className="contacts__list">
          {contacts.map((contact) => (
            <li className="contacts__item">
              <div className={contact.online ? 'online' : ''}>
                <img src={contact.profile_picture} alt="profile picture" />
              </div>
              <span>{contact.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
