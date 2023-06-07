import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import profile from '../../assets/image/woman.jpg';

export const About = () => {
  return (
    <>
      <section className='about'>
       
        <div>
          <div className='container-section '>
           <div className="container">
           <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div data-aos='fade-down-right'>
                  <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={profile} alt='' className="profile-img" />
                      </div>
                      <div className="flip-card-back">
                        <img src={profile} alt='' className="profile-img" />    </div>
                    </div>


                  </div>

                </div>
              </div>
              <div className="col-lg-7 col-md-6  col-12 mob-top">
                <div  data-aos='fade-down-left'>
                  <Heading title='About Me' />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  versions of Lorem Ipsum.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-6"><h6>Phone:</h6></div>
                    <div className="col-lg-8 col-md-6 col-6"><h6>98756456778</h6></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-6"><h6>Email:</h6></div>
                    <div className="col-lg-8 col-md-6 col-6"><h6>Prachi@gmail.com</h6></div>
                  </div><div className="row">
                    <div className="col-lg-4 col-md-6 col-6"><h6>City:</h6></div>
                    <div className="col-lg-8 col-md-6 col-6"><h6>Indore</h6></div>
                  </div><div className="row">
                    <div className="col-lg-4 col-md-6 col-6"><h6>Remort Work:</h6></div>
                    <div className="col-lg-8 col-md-6 col-6"><h6>Available</h6></div>
                  </div>
                  <div className="download-style">
                    <button>Download CV</button>
                  </div>
                </div>
              </div>
            </div>
            <section className="skill-section">
              <div className="heading-center">
                <Heading title='Skills' />
              </div>
             <div className="row">
              <div className="col-lg-6 col-xs-12" data-aos='fade-down-left'>
              <div className="bar learning" data-skill="TDD"></div>
              <div className="bar back basic" data-skill="Python"></div>
              <div className="bar back intermediate" data-skill="C#"></div>
              <div className="bar front advanced" data-skill="CSS3"></div>
              <div className="bar front expert" data-skill="HTML5"></div>
              </div>
              <div className="col-lg-6 col-xs-12" data-aos='fade-down-right'>
              <div className="bar learning" data-skill="TDD"></div>
              <div className="bar back basic" data-skill="Python"></div>
              <div className="bar back intermediate" data-skill="C#"></div>
              <div className="bar front advanced" data-skill="CSS3"></div>
              <div className="bar front expert" data-skill="HTML5"></div>
              </div>
              </div>
            </section>
           </div>
          </div>
        </div>

      </section>
    </>
  )
}
