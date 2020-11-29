import React, { Component } from "react";
import "./Home.css";
import NavHeader from "../nav";
import hop from "../../asset/hop.png";
import {Link} from 'react-router-dom';
import WhyHop from "../WhyHop/WhyHop";
import HomeOperate from "../HomeOperate/HomeOperate";
import HomeApp from "../HomeApp/HomeApp";
import HomeBlog from "../HomeBlog/HomeBlog";
import Supported from "../Supported";
import Footer from "../Footer";

class Home extends Component {
  constructor(props){
  super(props);
  this.state = {};
  }

  // componentDidMount() {
  //   window.addEventListener('beforeunload', this.keepOnPage);
  //   window.addEventListener('popstate', (event) => {
  //     alert("You message");
  //   });
  // }
  
  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.keepOnPage);
  // }
  
  // keepOnPage(e) {
  //   var message = 'Warning!\n\nNavigating away from this page will delete your text if you haven\'t already saved it.';
  //   e.returnValue = message;
  //   return message;
  // }

  render() {
    return (
    <div>
      <div className="Home">
        <div className="home-header">
          <NavHeader drawerHandler={this.props.drawerClickHandler}/>
        </div>

        <div className="home-content">
          <div className="content">
            <div className="content-title">
              <h1>
                Think
                <span id="title"></span> | <br /> Think hop
              </h1>
              <p>
              A full-stack global banking solution for Indian millennials. <br />You only need HOP to Save, Invest, Borrow and Spend.
              </p>
              {/* <button className="btn" type="submit">Join Us</button> */}
              <div className="joinus">
               <Link to="" className="join-btn">Join Us</Link>
              </div>
            </div>
          </div>
          <div className="body-image">
            <img src={hop} alt="hop" />
          </div>
        </div>
      </div>
      <div className="home-whyhop">
          <WhyHop />
        </div>
        <div className="home-operand">
            <HomeOperate />
        </div>
        <div className="home-app">
          <HomeApp />
        </div>
       <div className="home-blog">
         <HomeBlog />
       </div>
       <div className="home-support">
         <Supported />
       </div>
       <div className="home-calculator">
         <div className="home-savings">
           <h2>Get a <strong>free</strong>  copy of your Savings Calculator</h2>
           <p>Enter your email address below.</p>
           <div className="email-container">
           <input  className="email" type="email" placeholder="bob@dayln.com" />
           </div>
          
          <div className="email-btn">
            <button type="submit">Download</button>
          </div>
         </div>
       </div>
       <div className="footer">
         <Footer />
       </div>
      </div>
    );
  }
}

export default Home;
