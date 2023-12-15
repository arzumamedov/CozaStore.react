import React from 'react'
import './contact.css'
import ScrollToTop from '../ScrollToTop'
function Contact() {
  return (
    <>
      <div className='aboutFirst'>
        <h2>Contact</h2>
      </div>
      <div className='aboutSecond'>
        <div className='border'>
          <div className='borderLeft'>
            <div className='inputs'>
              <h3>Send Us A Message</h3>
              <input type="text" placeholder='Your Email Address' />
              <i class="fa-regular fa-envelope"></i>
              <textarea placeholder='How Can We Help?' name="`" id="" cols="30" rows="20"></textarea>
              <button>SUBMIT</button>
            </div>
          </div>
          <div className='borderRigth'>
            <div className='rightText'>
              <div className='address'>
                <i class="fa-solid fa-location-dot"></i>
                <div className='talkText'>
                  <h6 className='h6'>Address</h6>
                  <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                </div>
              </div>
              <div className='letsTalk'>
                <i class="fa-solid fa-phone"></i>
                <div className='talkText'>
                  <h6 className='h6'>Lets Talk</h6>
                  <p>+1 800 1236879</p>
                </div>
              </div>
              <div className='support'>
                <i class="fa-regular fa-envelope"></i>
                <div className='talkText'>
                  <h6 className='h6'>Sale Support</h6>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </>
  )
}

export default Contact