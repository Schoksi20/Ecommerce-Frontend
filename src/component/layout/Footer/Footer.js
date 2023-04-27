import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SCE</h1>
        <p>Best Ecommerce Platform</p>

        <p>Copyrights 2023 &copy; SCE</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="www.instagram.com">Instagram</a>
        <a href="www.youtube.com">Youtube</a>
        <a href="www.facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
