import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container-section'>
          <Heading title='Services' />
          <div className="container">
          <div className="row">
          {services.map((item) => (
            <div className="col-lg-4 col-md-6 col-12">
          
              <div className='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p className="text-dis">{item.desc}</p>
              </div>
         
          </div>
             ))}
          </div>
          </div>
        
        </div>
      </section>
    </>
  )
}
