import React, { useState } from "react";
import "./FAQSection.css";
import { faqData } from "../../utils/faqData";
("../../utils/faqData");

function FAQSection() {
  return (
    <div  id="FAQ">
      <h1 className="faq-banner">FAQ</h1>
      <div className="faq-container paddings innerWidth description-container">
        {faqData.map((section) => (
          <div key={section.section} className="faq-section">
            <h2 className="faq-subsections">{section.section}</h2>
            {section.questions.map((question) => (
              <Accordion key={question.question} title={question.question}>
                {question.answer}
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="accordion-content">{children}</p>}
    </div>
  );
}

export default FAQSection;
