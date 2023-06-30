import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

import data from "../../utils/accordion";

import "./Value.css";

const Value = () => {
  return (
    <section id="OurValues" className="value-wrapper">
      <div className="paddings innerWidth flexCenter value-container">
        {/*LEFT SIDE*/}
        <div className="left">
          <div className="img-container">
            <img src="./1_Studying.jpg" alt="House" />
          </div>
        </div>

        {/*RIGHT SIDE*/}
        <div className="flexColStart right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            Experience the Unmatched Value of our AWS Exam Prep Flashcards:
            Maximize your learning efficiency, reinforce crucial concepts, and
            gain the confidence needed to succeed in AWS certification exams.
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((info, key) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`a-item ${className}`}
                  key={key}
                  uuid={key}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter a-button">
                      {/* <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState> */}

                      <div className="flexCenter icon">{info.icon}</div>
                      <span className="primaryText">{info.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{info.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
