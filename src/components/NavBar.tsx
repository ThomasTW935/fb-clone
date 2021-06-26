import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
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
import { useAuth } from "../context/AuthContext";

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
  const [searchOnFocus, setSearchInFocus] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const { currentUser,
    signup,
    login,
    logout,} = useAuth()
  function searchIconClick() {
    setSearchInFocus(true);
    searchRef.current?.focus();
  }
  return (
    <nav className="nav">
      {/* Left */}
      <div className="nav__left">
        {!searchOnFocus && (
          <button className="logo">
            <FontAwesomeIcon
              className="logo__icon"
              icon={faFacebook}
              size="2x"
            />
          </button>
        )}
        <section className="search">
          {searchOnFocus && (
            <FontAwesomeIcon size="lg" className="search__back" icon={faArrowLeft} />
          )}
          <div
            className={
              searchOnFocus
                ? "search__input search__input--focus"
                : "search__input"
            }
          >
            <FontAwesomeIcon
              onClick={searchIconClick}
              className={searchOnFocus ? "search__icon hidden" : "search__icon"}
              icon={faSearch}
            />
            <input
              className=""
              ref={searchRef}
              type="search"
              placeholder="Search Facebook..."
              onFocus={() => setSearchInFocus(true)}
              onBlur={() => setSearchInFocus(false)}
            />
          </div>
        </section>
      </div>

      {/* Middle */}
      <div className="nav__middle">
        {PRIMARY_TABS.map((tab,index) => (
          <Link key={index}
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
        <button className="btn profile">
          <div className="image">
            <img src="../../testImg.jpg" alt="Profile" />
          </div>
          <span>Daryl</span>
        </button>
        {SECONDARY_TABS.map((tab,index) => (
          <button key={index}
            className={secondaryTab === tab.name ? "btn activeTab" : "btn"}
            onClick={() => {
              setSecondaryTab(tab.name);
            }}
          >
            <FontAwesomeIcon icon={tab.icon} size="lg" />
          </button>
        ))}
        
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
