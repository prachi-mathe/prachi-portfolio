import React from "react";
import { Heading } from "../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from '@fortawesome/free-regular-svg-icons';

export const WorkExperience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="workexperience hero">
        <div className="container-section mob-container">
          <Heading title="Work Experience" />
          <div className="timeline">
            <div
              className="timeline__event  animated fadeInUp delay-3s timeline__event--type1 "
              data-aos="fade-down-right"
            >
              <div className="timeline__event__icon ">
                <FontAwesomeIcon icon={faBriefcase} data-aos="fade-down-left" />
              </div>
              <div className="timeline__event__date">Experience</div>
              <div className="timeline__event__content ">
                <div className="timeline__event__title">
                  Webiwork Technologies pvt. ltd, Indore [m.p.]
                </div>
                <div className="timeline__event__description">
                  <p className="mb-0">Web Designer ( July 2021 – To Present )</p>
                 
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-2s timeline__event--type2"
              data-aos="fade-down-left"
            >
              <div className="timeline__event__icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="timeline__event__date">Experience</div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                Webcodz Pvt. Ltd.,Indore
                </div>
                <div className="timeline__event__description">
                  <p className="mb-0">
                  Web Designer (Sep 2020 – Jan 2021)
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-1s timeline__event--type3"
              data-aos="fade-down-right"
            >
              <div className="timeline__event__icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="timeline__event__date">Experience </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                CrazyWeb Designers, Indore       
                </div>
                <div className="timeline__event__description">
                  <p className="mb-0">
                  Web Designer( Feb 2020 – June 2021)
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp timeline__event--type1"
              data-aos="fade-down-left"
            >
              <div className="timeline__event__icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="timeline__event__date">Experience</div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                DigigyorNothing Like OR.,Indore
                </div>
                <div className="timeline__event__description">
                  <p className="mb-0">
                  Web Designer (July 2019 – March 2020)
                  </p>
                  <p className="mb-0">
              ( Internship Certificate)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
