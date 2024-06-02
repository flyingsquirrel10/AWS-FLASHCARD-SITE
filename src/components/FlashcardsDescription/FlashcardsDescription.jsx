import React from "react";
import flashcardDescriptionData from "../../utils/flashcardDescriptions.json";
import { useState } from "react";
import "./FlashcardsDescription.css";

const FlashcardsDescription = () => {
  const FlashcardAccordion = flashcardDescriptionData.map(
    ({ title, content }) => {
      const [isExpanded, setIsExpanded] = useState(false);

      const handleAccordionToggle = () => {
        setIsExpanded(!isExpanded);
      };

      return (
        <div>
          <h3 onClick={handleAccordionToggle}>{title}</h3>
          {isExpanded && <p>{content}</p>}
        </div>
      );
    }
  );

  return (
    <section id="FlashcardsDescription" className="description-wrapper">
      <div className="paddings innerWidth description-container">
        <div className="flexColStart descrption-head">
          <h2
            alt="AWS Exam Study Guide"
            className="orangeText headerDescription"
          >
            Flashcards Description
          </h2>
        </div>

        <p alt="overview" className="flashcard-intro">
          The flashcards are broken into sections that most closely match the
          AWS Certified Developer Associate Exam but the material can be
          applied across the AWS Cloud Practitioner, AWS Certified
          Solutions Architect - Associate, and the AWS Certified Developer
          Associate Exams.
          <br />
          <br />
          The flashcards are designed with the student in mind. They are short
          and concise, giving detailed explanations to why an answer is correct.
        </p>

        <div className="grid-container">
          {flashcardDescriptionData.map((flashcard, index) => (
            <div key={flashcard.header} className="faq-section">
              <h2 className="headerDescription">{flashcard.header}</h2>
              {flashcard.subheaders.map((subheader) => (
                <Accordion
                  key={subheader.subheader}
                  title={subheader.subheader}
                >
                  {subheader.description}
                </Accordion>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

export default FlashcardsDescription;
