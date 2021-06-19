import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faCaretDown,
  faHome,
  faPlay,
  faPlus,
  faSearch,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
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
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
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
        {TABS.map((tab) => (
          <Link
            to={tab.name !== "home" ? `/${tab.name}` : "/"}
            className={activeTab === tab.name ? "btn activeTab" : "btn"}
            onClick={() => {
              setActiveTab(tab.name);
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size="lg" />
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="nav__right">
        <button className='btn'>
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
        <button className='btn'>
          <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
        </button>
        <button className='btn'>
          <FontAwesomeIcon icon={faBell} size="lg" />
        </button>
        <button className='btn'>
          <FontAwesomeIcon icon={faCaretDown} size="lg" />
        </button>
      </div>
    </nav>
  );
}
