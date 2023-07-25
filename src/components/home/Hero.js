import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import linkdin from "../../assets/image/linkdin.png"
import skype from "../../assets/image/skype.png"
import email from "../../assets/image/email.png"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <>
      <div className="context">
        <section className='hero'>
          {home.map((val, i) => (
            <div className='heroContent'>
              <h3 className='fontSize' data-aos='fade-right'>
                {val.text}
              </h3>
              <h1>
                <Typewriter
                  options={{
                    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p data-aos='fade-left' className="banner-text">{val.desc}</p>
              <div>
                <div className="flex-icon">
                  <Link href='https://www.linkedin.com'><img src={linkdin} alt='' data-aos='zoom-in-right' className="socialicon" /></Link>
                  
                  <Link href='https://www.linkedin.com'> <img src={skype} alt='' data-aos='zoom-in-right' className="socialicon" /></Link>
                  <Link href='https://www.linkedin.com'> <img src={email} alt='' data-aos='zoom-in-right' className="socialicon" /></Link>
                  
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </>
  )
}
