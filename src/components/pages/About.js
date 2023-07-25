import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import profile from "../../assets/image/f3b0acf3-2e1f-4427-a471-32ccf61278e7.jpg";

export const About = () => {
  return (
    <>
      <section className="about">
        <div>
          <div className="container-section ">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-12">
                  <div data-aos="fade-down-right">
                    <div className="flip-card" tabIndex="0">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src={profile} alt="" className="profile-img" />
                        </div>
                        <div className="flip-card-back">
                          <img src={profile} alt="" className="profile-img" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6  col-12 mob-top">
                  <div data-aos="fade-down-left">
                    <Heading title="About Me" />
                    <p className="mb-0">
                      I am a diligent professional front-end developer with
                      around 3 years of working experience in Web designing. Aim
                      to be placed in a challenging organization that gives me
                      scope to enhance my knowledge & skills in accordance with
                      the latest trends and be a part of a team that dynamically
                      works towards growth of organization.
                    </p>
                    <p className="mb-0">
                      1.A result-oriented professional with 1+ years of
                      experience in Web development.
                    </p>
                    <p className="mb-0">
                      2.Presently associated with Webiwork Technologies, Indore
                      as a Frontend Developer.
                    </p>
                    <p className="mb-0">
                      3.Drove efforts towards maintaining web development
                      practices, adhered to company standards for coding.
                    </p>
                    <p>
                      4.Abilities to work effectively both as an individual or
                      as part of a team.Willing to learn and adapt to new
                      technologies.
                    </p>

                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-6">
                        <h6>Phone:</h6>
                      </div>
                      <div className="col-lg-8 col-md-6 col-6">
                        <h6>8962283860</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-6">
                        <h6>Email:</h6>
                      </div>
                      <div className="col-lg-8 col-md-6 col-6">
                        <h6>Prachi.mathe0@gmail.com</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-6">
                        <h6>City:</h6>
                      </div>
                      <div className="col-lg-8 col-md-6 col-6">
                        <h6>Indore</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="skill-section">
                <div className="heading-center">
                  <Heading title="Skills" />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                    
                  <div className="bar front expert" data-skill="HTML5"></div>
                  <div className="bar front expert" data-skill="Bootstrap"></div>
                  <div className="bar front advanced" data-skill="CSS"></div>
                  <div
                      className="bar back intermediate"
                      data-skill="Material UI"
                    ></div>
                     <div
                      className="bar back intermediate"
                      data-skill="React js"
                    ></div>
                    {/* <div className="bar learning" data-skill="TDD"></div>
                    <div className="bar back basic" data-skill="Python"></div> */}
                   
                   
                  </div>
                  <div
                    className="col-lg-6 col-xs-12"
                    data-aos="fade-down-right"
                  >
                   <div className="bar front expert" data-skill="Tailwind css"></div>
                  <div className="bar front expert" data-skill="Figma"></div>
                  <div className="bar front advanced" data-skill="SCSS"></div>
                  <div className="bar front advanced" data-skill="Javascript"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
