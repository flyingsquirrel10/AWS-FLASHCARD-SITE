import React from "react";

import { HiLocationMarker } from "react-icons/hi";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left side*/}
        <div className="flexColStart left">
          <div className="title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              Enhance Your
              <br />
              Studying Experience
            </motion.h1>
          </div>
          <div className="flexColStart description">
            <span className="secondaryText">
              {" "}
              Find a variety of properties that suit you very easilty{" "}
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Flashcards Sold</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={90} end={800} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Passsed Exams</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={728} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className="flexCenter right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="img-container"
          >
            <img src="/AWScards_1.jpg" alt="building" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
