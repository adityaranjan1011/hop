import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => (
  <div className="BackDrop" onClick={props.backDropclick} />
);
export default BackDrop;
