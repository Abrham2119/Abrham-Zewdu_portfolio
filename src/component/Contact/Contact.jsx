import React, { useState } from 'react'
import './Contact.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();
  const [done ,setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yoot29m', 'template_dyp2kio', form.current, 'B93PxzhhCTvj5vDs_')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="awsome">
                <span>Get in to touch</span>
                <span>Contact me</span>
                <div
                  className='blur c-blur1'
                  style={{ background: "var(--purple)" }}></div>

                </div>
        </div>
          <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" className='user' placeholder='Name' />
                  <input type="email" name="user_email" className='user' placeholder='Email' />
                  <textarea name="message" className="user" placeholder='Message'></textarea>
                  <input className='button' type="submit" value="send" placeholder='button' />
                  <span>{done && "Thank you for contacting me"}</span>
                  <div
                      className='blur c-blur2'
                      style={{ background: "#abf1ff94" }}></div>

              </form>
          </div>
    </div>
  )
}

export default Contact