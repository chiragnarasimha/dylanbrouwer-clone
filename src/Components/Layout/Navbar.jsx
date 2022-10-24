import "./Navbar.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faCodepen,
  // faDumpsterFire
} from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="navbar__logo-section" className="navbar__section">
        <a href="#">
          <FontAwesomeIcon className="navbar__logo" icon={faDumpsterFire} />
        </a>
      </div>
      <div id="navbar__link-section" className="navbar__section">
        <a href="#">ABOUT</a>
        <a href="#">WORK</a>
      </div>
      <div id="navbar__social-section" className="navbar__section">
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__twitter"
            icon={faTwitter}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__youtube"
            icon={faYoutube}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__codepen"
            icon={faCodepen}
          />
        </a>
      </div>
      <div id="navbar__contact-section" className="navbar__section">
        <a href="">GET IN TOUCH</a>
      </div>
      <div>
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <FontAwesomeIcon icon={["fab", "microsoft"]} />
        <FontAwesomeIcon icon={["fab", "google"]} />
      </div>
    </nav>
  );
};

export default Navbar;
