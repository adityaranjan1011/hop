import React, { Component } from "react";
import "./WhyHop.css";
import Carousel from "react-elastic-carousel";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
import img6 from "../../asset/img6.png";

class WhyHop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "One Global Card",
          src: img1,
          desc: "Now travel global but spend like a local",
        },
        {
          id: 2,
          title: "Fast & Economical Currency Exchange",
          src: img2,
          desc: "Gain access to 50+ currencies on demand",
        },
        {
          id: 3,
          title: "Omnichannel Expenditure Capabilities",
          src: img3,
          desc: "Spend money via UPI, QR Code, NFC, or Hop Card",
        },
        {
          id: 4,
          title: "Instant Remittance",
          src: img4,
          desc: "Transfer funds globally, easily, economically, and instantly!",
        },
        {
          id: 5,
          title: "On-App Expense Management",
          src: img5,
          desc: "Manages youe expenses on the go",
        },
        {
          id: 6,
          title: "Multi-currency One Global Account",
          src: img6,
          desc: "Get any currency anytime anywhere at live exchange rates",
        },
      ],
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const { items } = this.state;
    return (
      <div className="WhyHop">
        <div className="hop-header">
          <h2>Why Hop ?</h2>
          <p>With HOP, the benefits are ENDLESS!</p>
        </div>
        <div className="hop-carousel">
          <Carousel itemsToShow={3}>
            {items.map((item) => (
              <div className="item" key={item.id}>
                <img
                  className="itemImage"
                  src={item.src}
                  alt="hop-item"
                  height="330px"
                  width="350px"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default WhyHop;
