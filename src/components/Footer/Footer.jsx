import React from "react";
import { MdCopyright } from "react-icons/md";

import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="innerwidth paddings flexCenter footer-container">
        {/*LEFT SIDE*/}
        <div className="flexColStart f-left">
          {/* <img src="/Trumountain-white.png" alt="Logo" /> */}
          <span className="secondaryText">
            <b>Disclaimer:</b> <br />
            This product is not endorsed, sponsored, or supported by Amazon Web
            Services (AWS). The AWS logo and trademarks are the
            <br />
            property of AWS and are used here for informational purposes only.
            <br />
            We are an independent company offering study resources and are not
            affiliated with or endorsed by AWS.{" "}
          </span>
        </div>

        {/*RIGHT SIDE*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <div className="flexCenter icon">
            <MdCopyright size={20} />{" "}
            <span className="secondaryText">2023 TruMountain LLC</span>
          </div>
          <div className="flexCenter f-menu">
            <span>
              Enabling AWS excellence through <br />
              comprehensive and accessible learning.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
