import React from "react";
import "./HomeOperate.css";
import HOP from '../../asset/mobile.png';

export default function HomeOperate() {
  return (
    <div className="HomeOperate">
      <div className="operand">
        <div className="operand-image">
          <img className="image" src={HOP} alt="Hop" />
        </div>
        <div className="operand-content">
          <div className="content-title">
            <p>OPERATE & SPEND</p>
            <h2> Hop One Global Account</h2>
            <p>
              Wherever you are, and whatever you’re doing,open your <br /> HOP
              One Global Account for FREE and enjoy a seamless
              <br /> management and spending experience.
            </p>
          </div>
          <div className="content-text">
            <p>
              <h2>HOP CARD</h2>
              <ul>
                <li> Debit cum multi-currency forex card </li>
                <li>
                  {" "}
                  Smart controls: On-app freeze, pin-reset, block ATM
                  withdrawals etc.{" "}
                </li>
                <li>Instant virtual card plus physical card</li>
              </ul>
            </p>
           
            {/* <div id="slider">
            <p className="slider-container">
            <h2>MANAGE</h2>
              <ul>
                <li>Real-time on-app Spend Notification</li>
                <li>Smart Expense Management Module with analytics</li>
                <li>Set daily or monthly budgets.</li>
              </ul>
            </p> */}
            {/* <p className="item-2">
              <h2>OPERATE</h2>
              <ul>
                <li>Instant account opening using digital on-boarding</li>
                <li>Multi-currency Bank Account</li>
                <li>Best Interest Rates- up to 6%*</li>
              </ul>
            </p>
            <p className="item-3">
              <h2>SPEND</h2>
            <ul>
              <li>
                0% Markup on Foreign Exchange- Get Any Currency Anytime
                Anywhere!
              </li>
              <li>One Global Card-Travel Global, Spend Like a Local</li>
              <li>Pay your Bills: Tap, Scan, Swipe or use online</li>
            </ul>
            </p> */}
            {/* <p className="slider-container">
              <h2>MANAGE</h2>
              <ul>
                <li>Real-time on-app Spend Notification</li>
                <li>Smart Expense Management Module with analytics</li>
                <li>Set daily or monthly budgets.</li>
              </ul>
            </p>

            <p className="slider-container">
              <h2>REWARDS</h2>
              <ul>
                <li>
                  Round the Clock Support: Live chat, chatbots, WhatsApp, call
                </li>
                <li>Refer and Earn Hop Coins</li>
                <li>Exciting Offers and Cashbacks</li>
              </ul>
            </p>
            <p className="slider-container">
              <h2>Coming Soon</h2>
              <ul>
                <li>Invest in Mutual Funds (Domestic and International)</li>
                <li>Get Rewards on Salary Credit</li>
                <li>Borrow Money on One Click</li>
              </ul>
            </p> */}
            {/* </div>             */}
            </div>
            <div className="apps">
            <p>Downloads the APP | Explore More</p>
            </div>
        </div>
      </div>
    </div>
  );
}

// export default HomeOperate;
