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

const PRIMARY_TABS = [
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
const SECONDARY_TABS = [
  {
    name: "plus",
    icon: faPlus,
  },
  {
    name: "messenger",
    icon: faFacebookMessenger,
  },
  {
    name: "bell",
    icon: faBell,
  },
  {
    name: "downArrow",
    icon: faCaretDown,
  },
];

export default function NavBar() {
  const [primaryTab, setPrimaryTab] = useState(PRIMARY_TABS[0].name);
  const [secondaryTab, setSecondaryTab] = useState("");
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
        {PRIMARY_TABS.map((tab) => (
          <Link
            to={tab.name !== "home" ? `/${tab.name}` : "/"}
            className={primaryTab === tab.name ? "btn activeTab" : "btn"}
            onClick={() => {
              setPrimaryTab(tab.name);
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size="lg" />
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="nav__right">
        <button className='btn profile'>
          <div className='image'>
            <img src='../../testImg.jpg' alt='Profile'/>
          </div>
          <span>Daryl</span>
        </button>
        {SECONDARY_TABS.map((tab) => (
          <button
            className={secondaryTab === tab.name ? "btn activeTab" : "btn"}
            onClick={() => {
              setSecondaryTab(tab.name);
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size="lg" />
          </button>
        ))}
      </div>
    </nav>
  );
}
