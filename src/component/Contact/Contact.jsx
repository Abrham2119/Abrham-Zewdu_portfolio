import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className="contact-form">
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
              <form action="">
                  <input type="text" name="user_name" className='user' placeholder='Name' />
                  <input type="email" name="user_email" className='user' placeholder='Email' />
                  <textarea name="message" className="user" placeholder='Message'></textarea>
                  <input className='button' type="submit" value="send" placeholder='button' />
                  <div
                      className='blur c-blur2'
                      style={{ background: "#abf1ff94" }}></div>

              </form>
          </div>
    </div>
  )
}

export default Contact