import React from "react";

import { BsCameraVideoFill, BsChatDotsFill, BsChatFill } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";

import "./Contact.css";

const Contact = () => {
  const handleContactEmailClick = () => {
    const emailAddress = "trumountainllc@gmail.com";

    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="ContactUs" className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/*LEFT SIDE*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexCenter row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="icon">
                  <MdOutgoingMail />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Email</span>
                  <span className="secondaryText">
                    trumountainllc@gmail.com
                  </span>
                </div>
              </div>
              {/* <a href="mailto:trumountainllc@gmail.com"> */}
              <button className="button" onClick={handleContactEmailClick}>
                Email
              </button>
              {/* </a> */}
            </div>
            {/* <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="icon">
                  <BsChatFill />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">123-123-1234</span>
                </div>
              </div>
              <button className="flexCenter button">Message now</button>
            </div> */}
          </div>
          <div className="flexCenter row">
            {/* <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="icon">
                  <BsCameraVideoFill />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Common Questions</span>
                  <span className="secondaryText">FAQ page</span>
                </div>
              </div>
              <button className="flexCenter button">FAQ</button>
            </div> */}
            {/* <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="icon">
                  <BsChatFill />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">4002-8922</span>
                </div>
              </div>
              <button className="flexCenter button">Message now</button>
            </div> */}
          </div>
        </div>

        {/*RIGHT SIDE*/}
        <div className="flexEnd c-right">
          <div className="img-container">
            <img src="./contact.jpg" alt="Phone image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
