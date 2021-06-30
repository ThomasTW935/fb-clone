import Contacts from "../components/home/Contacts";

import {
  faUserFriends,
  faFlag,
  faCaretDown,
  faPlay,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../context/AuthContext";
import testImg from '../testImg.jpg';

const SIDENAV_ITEMS = [
  {
    name: "friends",
    icon: faUserFriends,
  },
  {
    name: "Pages",
    icon: faFlag,
  },
  {
    name: "groups",
    icon: faUsers,
  },
  {
    name: "marketplace",
    icon: faStore,
  },
  {
    name: "watch",
    icon: faPlay,
  },

  {
    name: "See More",
    icon: faCaretDown,
  },
];
export default function Home() {
  const { currentUser } = useAuth();
  return (
    <main className="home">
      {/* Left */}
      <section className="sideNav">
        <ul className="sideNav__list">
          {SIDENAV_ITEMS.map((item, index) => (
            <li key={index} className="sideNav__item">
              <span>
                <FontAwesomeIcon size="lg" icon={item.icon} />
              </span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* Middle */}

      <section className="newsFeed">
        <div>
          <section className='post__create'>
            <div>
              <img src={testImg} alt="profile" className='profile__image' />
            </div>
            <button className='btn'>What's on your mind, {currentUser.name}?</button>
          </section>
          <section></section>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium provident sed magni mollitia asperiores nihil sequi quis
          molestiae laborum voluptas, hic tempore ab excepturi adipisci
          necessitatibus voluptatum sapiente at? Quibusdam facere possimus
          pariatur sed sequi tempore nulla neque! Eum cum quo soluta porro
          doloribus nesciunt natus culpa nihil eaque maiores, libero adipisci
          sequi voluptate velit ducimus facilis neque tempore!
        </div>
      </section>

      {/* Right */}
      <Contacts />
    </main>
  );
}
