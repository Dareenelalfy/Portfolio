import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__navbar section__padding">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="app__navbar_content">
        <div className="app__navbar_content-links scale-up-br">
          <p>
            <a href="#Header" aria-label="About Me">
              About Me
            </a>
          </p>
          <p>
            <a href="#Projects" aria-label="Projects">
              Projects
            </a>
          </p>
        </div>

        <a
          className="contact_me"
          href="https://www.linkedin.com/in/dareenelalfy/"
          type="button"
          aria-label="contact me"
        >
          Contact Me
        </a>
      </div>

      <div className="app__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#e83729"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#e83729"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-menu_container flex__center">
            <RiCloseLine
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-menu_content-links">
              <p>
                <a href="#aboutme" aria-label="About me" />
                About Me
              </p>
              <p>
                <a href="#projects" aria-label="Projects" />
                Projects
              </p>
            </div>
            <button
              type="button"
              className="app__navbar-menu_content-links-button"
            >
              {" "}
              Contact Me
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
