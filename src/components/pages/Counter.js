import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";
import { Heading } from "../common/Heading";

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <Heading title="Facts" />
      <div className="hero counter">
        <div className="container-section">
          <div className="container">
          <div className="row">
          {project.map((item) => (
            <div className="col-lg-6 col-md-6 col-12">
             
                <div className="counter-box box " data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <h1 className="heading">
                    <CountUp enableScrollSpy duration={2} end={item.num} />+
                  </h1>
                  <h5 className="counter-text">{item.title}</h5>
                </div>
             
            </div>
             ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
