import React, { useEffect, useState } from "react"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { WorkExperience } from "../pages/WorkExperience"
import { Hero } from "./Hero"
import { Testimonial } from "../pages/Testimonial"
export const Home = ({ index }) => {
  useEffect(() => {
    if (index > 0) {
      const violation = document.getElementById(index);
      if(violation){
        violation.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [index])
  

  return (
    <>
      <div id="1"   >

        <Hero />
      </div>
      <div id="2">

        <About />
      <div >
        <Counter />
      </div>
      </div>
      <div id="3">

        <WorkExperience />
      </div>
      <div id="4">
        <Portfolio />
      </div>


      <div id="5">

        <Services />
      <div >

        <Testimonial /> 
           </div>
      </div>


      <div id="6">

        <Contact />
      </div>

    </>
  )
}
