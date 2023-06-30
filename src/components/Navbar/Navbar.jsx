import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  const handleContactButtonClick = () => {
    const emailAddress = "trumountainllc@gmail.com";

    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#Products">Packages</a>
            <a href="#Reviews">Reviews</a>
            <a href="#FlashcardsDescription">Product Description</a>
            <a href="#OurValues">Our Value</a>
            <a href="/faq"> FAQ</a>
            <a href="#ContactUs"> Contact Us</a>
            <button onClick={handleContactButtonClick} className="button">
              Contact
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
