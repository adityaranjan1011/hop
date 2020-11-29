import React from 'react';
import './Footer.css';
// import hop from "../../asset/hop.png";
import {Link} from "react-router-dom";

export default function Footer () {
  
    return (
      <div className="Footer">
        <div className="footer-list">
          <div className="footer-logo">
          <Link to="/" className="link">
              <img src="https://moneyhop.co/wp-content/uploads/2020/09/logo-blue.svg" alt="logo" />
              </Link>
              <p className="footer-text">
              300 Vauxhall Bridge Rd, Westminster, 
London SW1V 1AA, United Kingdom
              </p>
              <p className="footer-text">
              2082, 24th Main Rd, Vanganahalli, 1st Sector, 
HSR Layout, Bengaluru, Karnataka 560102
              </p>
              <p className="footer-text">
              We are a fully fledged money changer regulated by the Reserve Bank of India (RBI). <br/>
              <strong>License number : FE.KAN. 091/FFMC </strong>
              </p>
          </div>
          <div className="footer-product">
            <h2>Products</h2>
            <p><a href="https://moneyhop.co/operate-spend/" >Operate & Spend </a></p>
            <p><a href="https://moneyhop.co/send/" >Send </a></p>
          </div>
          <div className="footer-company">
            <h2>Company</h2>
            <p><a href="https://moneyhop.co/about/" >About</a></p>
            <p><a href="https://moneyhop.co/blog/" >Blog</a></p>
            <p><a href="https://moneyhop.co/faq/" >FAQs</a></p>
            <p><a href="https://moneyhop.co/careers/" >Carrer</a></p>
            <p><a href="https://moneyhop.co/privacy-policy/" >Privacy</a></p>
          </div>
          <div className="footer-contact">
            <h2>Contacts</h2>
            <p>
              <img src="https://moneyhop.co/wp-content/uploads/2020/07/smartphone.svg" alt="mobile" height="24px" width="24px" />
              
              +91-7753831857</p>
            <p>
            <img src="https://moneyhop.co/wp-content/uploads/2020/07/email.svg" alt="message" height="24px" width="24px" style={{paddingRight:'5px'}}/>
            adityamnnit2016@gmail.com</p>
            </div> 
          <div className="footer-follow">
            <h2>Follow us on</h2>
            <ul className="navList">
              <li className="list"><img src="https://moneyhop.co/wp-content/uploads/2020/09/facebook-h40.svg" alt="fb" height="20px" width="20px" /></li>
              <li className="list"><img src="https://moneyhop.co/wp-content/uploads/2020/09/instagram-h40.svg" alt="insta" height="20px" width="20px"/></li>
              <li className="list"><img src="https://moneyhop.co/wp-content/uploads/2020/09/linkedin-h40.svg" alt="link" height="20px" width="20px" /></li>
              <li className="list"><img src="https://moneyhop.co/wp-content/uploads/2020/09/youtube-icon.svg"  alt="you" height="20px" width="20px" /></li>
              <li className="list"> <img src="https://moneyhop.co/wp-content/uploads/2020/09/twitter-h40.svg" alt="twit" height="20px" width="20px" /></li>
            </ul>
            <h2>Download Our app</h2>
            <label>
            © 2020, moneyHop<br/>
            All Rights Reserved 
            </label>
          </div>
        </div>
      </div>
    );
  }
