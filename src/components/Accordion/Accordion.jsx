import React, { useState } from "react";
import "./Accordion.scss";
import faqsData from "../../fixtures/faqs.json";
import OptForm from "../OptForm/OptForm";
import { createContext } from "react";
const Accordion = () => {
  const ToggleContext = createContext();
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion__inner">
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        <div className="accordion__frame">
          {faqsData.map((item) => (
            <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
              <div className="accordion__item" key={item.id}>
                <div
                  className="accordion__header"
                  onClick={() => setToggleShow(!toggleShow)}
                >
                  {item.header}
                  {toggleShow ? (
                    <img src="/images/icons/close-slim.png" alt="Close" />
                  ) : (
                    <img src="/images/icons/add.png" alt="Open" />
                  )}
                </div>
                <div className={`${"accordion__body"} ${toggleShow ? 'open' : 'closed'}`}><span>{item.body}</span></div>
              </div>
            </ToggleContext.Provider>
          ))}
        </div>
        <OptForm />
      </div>
    </div>
  );
};

export default Accordion;
