import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./Browse.scss";
const Browse = () => {
  return (
    <>
      <Feature />
      <Jumbotron />
      <Accordion />
      <Footer />
    </>
  );
};

export default Browse;
