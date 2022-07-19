import React from "react";
import Header from "../Header/Header";
import OptForm from "../OptForm/OptForm";
import "./Feature.scss";
const Feature = () => {
  return (
    <div className="feature">
      <Header signIn/>
      <h1 className="feature__title">
        Unlimited films, TV <br />
        programmes and more.
      </h1>
      <h2 className="feature__subtitle">Watch anywhere. Cancel at any time.</h2>
      <OptForm/>
    </div>
  );
};

export default Feature;
