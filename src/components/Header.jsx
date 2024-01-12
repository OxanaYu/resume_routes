import React from "react";
import profilephoto from "../images/profilephoto.jpeg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-upper-center">
          <div className="header-upper-description">
            <span className="header-description-span">
              Hi, I'm Oxana Yurchenko & I'm a front end developer.
            </span>
            <p className="header-description-p">
              Mission-driven Front-End Developer with 1,3 years of experience in
              building and maintaining user interfaces. I’m passionate about the
              latest technologies, design and user experience.
            </p>
            <a href="https://github.com/OxanaYu" target="_blank">
              <button className="header-description-btn">Read more</button>
            </a>
          </div>
          <div className="header-img-container">
            <img className="header-img" src={profilephoto} alt="" />
          </div>
        </div>

        <nav className="nav-header">
          <div className="contacts">
            <span className="contacts-phone">+996556700524</span>
            <span className="contacts-email">yurchenko.o@gmail.com</span>
          </div>
          <div className="nav-icons-div">
            <div className="nav-img-container">
              <a
                href="https://www.facebook.com/oxana.yurchenko.12"
                target="_blank"
              >
                <img className="nav-img" src={facebook} alt="" />
              </a>
            </div>
            <div className="nav-img-container">
              <a
                href="https://www.instagram.com/yurchenkooxana/"
                target="_blank"
              >
                <img className="nav-img" src={instagram} alt="" />
              </a>
            </div>
            <div className="nav-img-container">
              <a
                href="https://www.linkedin.com/in/yurchenko-oxana-9229194a/"
                target="_blank"
              >
                <img className="nav-img" src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
