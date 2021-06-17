import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="nav">
      {/* Left */}
      <div className="nav__left">
        <button className="logo">
          <FontAwesomeIcon
            className="logo__icon"
            icon={faFacebook}
          />
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
      <div className="nav__middle"></div>

      {/* Right */}
      <div className="nav__right"></div>
    </nav>
  );
}
