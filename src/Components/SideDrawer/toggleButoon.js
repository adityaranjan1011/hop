import React from 'react'
import './sidedrawer.css';

const DrawerToggleButton = props => (

    <button className="toggle_btn" onClick={props.click}>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
    </button>
);

export default  DrawerToggleButton ;