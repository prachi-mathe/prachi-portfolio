import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
     <div className='contact'>
        <div className='container-section'>
         <div className="contact-heading">
         <Heading title='Keep In Touch' />
         </div>
          <div className='content'>
         <div className="container">
         <div className="row">
            <div className="col-lg-8">
            <div className=''>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='10' rows='7' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            </div>
            <div className="col-lg-4">
            <div className=''>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
         </div>
          </div>
        </div>
      </div>
    </>
  )
}
