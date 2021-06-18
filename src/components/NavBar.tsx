import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHome, faPlay, faSearch, faStore, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TABS = [
  {
    name: "home",
    icon: faHome, 
  },
  {
    name: "watch",
    icon: faPlay, 
  },
  {
    name: "marketplace",
    icon: faStore, 
  },
  {
    name: "group",
    icon: faUsers, 
  },
]

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(TABS[0].name)
  return (
    <nav className="nav">
      {/* Left */}
      <div className="nav__left">
        <button className="logo">
          <FontAwesomeIcon className="logo__icon" icon={faFacebook} size="2x" />
        </button>
        <section className="search">
          <FontAwesomeIcon className="search__icon" icon={faSearch} />
          <input
            type="search"
            className="search__input"
            placeholder="Search Facebook..."
          />
        </section>
      </div>

      {/* Middle */}
      <div className="nav__middle">
        {/* <button>
          <FontAwesomeIcon className="icon" icon={faHome} size="lg" />
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faHome} size="lg" />
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faHome} size="lg" />
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faHome} size="lg" />
        </button> */}
        {
          TABS.map(tab=>
            <Link to={tab.name !== "home" ? `/${tab.name}`: '/'} className={activeTab === tab.name ? 'btn activeTab': 'btn'} onClick={ ()=> { setActiveTab(tab.name) } }>
              <FontAwesomeIcon className="icon" icon={tab.icon} size="lg" />
            </Link>
          )
        }
      </div>

      {/* Right */}
      <div className="nav__right"></div>
    </nav>
  );
}
