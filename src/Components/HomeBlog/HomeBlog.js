import React from "react";
import { useState } from "react";
import "./HomeBlog.css";
import Carousel from "react-elastic-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import blog1 from "../../asset/blog1.jpg";
import blog2 from "../../asset/blog2.jpg";
import blog3 from "../../asset/blog3.jpg";
import blog4 from "../../asset/blog4.jpg";
import blog5 from "../../asset/blog5.jpg";
import blog6 from "../../asset/blog6.jpg";
import icon from '../../asset/arrowRight.svg';

export default function HomeBlog() {
  // const classes = useStyles();

  const [state, setstate] = useState({
    items: [
      {
        id: 1,
        title: "Gold Rush  –  But Don’t !!!",
        src: blog1,
        desc: "Read More",
      },
      {
        id: 2,
        title: "Everything You Must Know About Sending Money Abroad",
        src: blog2,
        desc: "Read More",
      },
      {
        id: 3,
        title:
          "Top 5 millennial friendly zero-balance savings account in India",
        src: blog3,
        desc: "Read More",
      },
      {
        id: 4,
        title: "Benefits of going cashless in India",
        src: blog4,
        desc: "Read More",
      },
      {
        id: 5,
        title: "Investing 101: Setting Investment Goals",
        src: blog5,
        desc: "Read More",
      },
      {
        id: 6,
        title: "Plan your international travel destinations",
        src: blog6,
        desc: "Read More",
      },
    ],
  });

  const { items } = state;
  return (
    <div className="HomeBlog">
      <h2>Our Blogs</h2>
      <div className="carousel">
        <Carousel itemsToShow={3}>
          {items.map((item) => (
            <Card className="item">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  width="220px"
                  image={item.src}
                  // title="Contemplative Reptile"
                />
                <CardContent>
                  <a
                    href="https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/"
                    className="title"
                  >
                    {item.title}
                  </a>
                  <a href="https://moneyhop.co/blog/investing-101-setting-investment-goals/" className="title-more">
                    {item.desc}<img src={icon} alt="icon" style={{paddingLeft:'5px'}}/>
                  </a>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
