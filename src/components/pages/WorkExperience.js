import React from "react"
import { Heading } from "../common/Heading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { faBriefcase } from '@fortawesome/free-regular-svg-icons';


export const WorkExperience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='workexperience hero'>
        <div className='container-section mob-container'>
          <Heading title='Work Experience' />
          <div className="timeline">
            <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1 "  data-aos='fade-down-right'>
              <div className="timeline__event__icon ">
              
                <FontAwesomeIcon icon={faBriefcase}  data-aos='fade-down-left'/>
              </div>
              <div className="timeline__event__date">
                Summary
              </div>
              <div className="timeline__event__content ">
                <div className="timeline__event__title">
                Front-End Web Developer - SCI

                </div>
                <div className="timeline__event__description">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                </div>
              </div>
            </div>
            <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2" data-aos='fade-down-left'>
              <div className="timeline__event__icon" >
               
                <FontAwesomeIcon icon={faBriefcase}  />


              </div>
              <div className="timeline__event__date">
                Experience
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                Web Developer - Vestas

                </div>
                <div className="timeline__event__description">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                </div>
              </div>
            </div>
            <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3" data-aos='fade-down-right'>
              <div className="timeline__event__icon">
              <FontAwesomeIcon icon={faBriefcase}  />
              </div>
              <div className="timeline__event__date">
              Freelance              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                Freelance Web Developer - Bekov Creative Studio

                </div>
                <div className="timeline__event__description">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                </div>

              </div>
            </div>
            <div className="timeline__event animated fadeInUp timeline__event--type1"  data-aos='fade-down-left'>
              <div className="timeline__event__icon">
              <FontAwesomeIcon icon={faBriefcase}  />

              </div>
              <div className="timeline__event__date">
              Front-End
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">
                Front-End Web Developer - UI/UX Designer - IADC

                </div>
                <div className="timeline__event__description">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
