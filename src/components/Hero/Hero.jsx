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
          <title> AWS EXAM TEST PREP</title>
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
              {" "}
              AWS <br /> EXAM PREP
            </motion.h1>
          </div>
          <div className="flexColStart description">
            <span className="secondaryText">
              {" "}
              Enhance Your Studying Experience: Invest in your future today and
              unlock the path
            </span>
            <span className="secondaryText">
              to a thriving career in the cloud.{" "}
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
                <CountUp end={100} />
                <span>+</span>
              </span>

              <span className="secondaryText">Topics Covered</span>
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
            <img src="./AWScards_1.jpg" alt="building" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
