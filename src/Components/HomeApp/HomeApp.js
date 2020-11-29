import React from 'react';
import './HomeApp.css';
import Mobile from '../../asset/mobileImg.png';
import Code from '../../asset/qrcode.png'

export default function HomeApp (){
  

  
    return (
      <div className="HomeApp">
        <div className="app-image">
          <img src={Mobile} alt="mobile" height="350px" width="150px"/>
        </div>
        <div className="app-text">
          <h2> Get the app</h2>
          <p>
         
Avail all banking services at your fingertips with no hidden fees and charges.<br /> Join the HOP community to get a comprehensive view and complete control of your finances.

          </p>
        </div>
        <div className="app-qr">
          <img src={Code} alt="code" height="150px" width="150px" />
        </div>
      </div>
    );
  }


