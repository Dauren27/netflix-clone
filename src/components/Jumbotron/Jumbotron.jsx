import React from "react";
import "./Jumbotron.scss";
import jumboData from "../../fixtures/jumbo.json"
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      {jumboData.map((item) => (
        <div className="jumbotron__item" key={item.id}>
          <div className="item__inner" key={item.id} style={{flexDirection: item.direction}}>
            <div className="inner__pane">
              <h1>{item.title}</h1>
              <h2>{item.subTitle}</h2>
            </div>
            <div className="inner__pane">
              <img src={item.image} alt={item.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jumbotron;
