
import {
  faUserFriends,
  faFlag,
  faCaretDown,
  faPlay,
  faStore,
  faUsers,
  faEllipsisH,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../auth/AuthContext";
import testImg from "../../assets/images/testImg.jpg";
import List from '../../core-ui/List.style'
import Section from '../../core-ui/Section'
import {SIZE} from '../../helper/enum'
import {CONTACTS} from '../../data'

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

      <Section size={SIZE.lg}>
        <List>
          {SIDENAV_ITEMS.map((item, index) => (
            <List.Item key={index}>
              <span>
                <FontAwesomeIcon size="lg" icon={item.icon} />
              </span>
              <span>{item.name}</span>
            </List.Item>
          ))}
        </List>
      </Section>

      {/* Middle */}

      <section className="newsFeed">
        <div>
          <section className="post__create">
            <div>
              <img src={testImg} alt="profile" className="profile__image" />
            </div>
            <button className="btn">
              What's on your mind, {currentUser.name}?
            </button>
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
      {/* <Contacts /> */}
      <Section size={SIZE.md}>
    <div className="contacts__head">
      <span>Contacts</span>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
    <List>
      {CONTACTS.map((contact,index) => (
        <List.Item key={index} className="contacts__item">
          <div className={contact.online ? 'online' : ''}>
            <img src={contact.profile_picture} alt="profile" className='profile__image' />
          </div>
          <span>{contact.name}</span>
        </List.Item>
      ))}
    </List>
  </Section>
    </main>
  );
}
