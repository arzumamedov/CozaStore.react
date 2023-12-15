import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
      <footer>
        <div className='textsTop'>
          <div className='textsTopLeft'>
            <div className='textsTopLeftL'>
              <h5>CATEGORIES</h5>
              <p>Women</p>
              <p>Men</p>
              <p>Shoes</p>
              <p>Watches</p>
            </div>
            <div className='textsTopLeftR'>
              <h5>HELP</h5>
              <p>Track Order</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className='textsTopRight'>
            <div className='textsTopRightL'>
              <h5>GET IN TOUCH</h5>
              <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
              <div className='icons'>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest-p"></i>
              </div>
            </div>
            <div className='textsTopRightR'>
              <h5>NEWSLETTER</h5>
              <input type="text" placeholder='email@example.com' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer