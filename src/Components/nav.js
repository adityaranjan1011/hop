import React, {Component} from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './SideDrawer/toggleButoon';



class NavHeader extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        console.log(this.props);
    }
    render(){
    return (
        <div>
            <div className="toogleButton">
                <DrawerToggleButton click={this.props.drawerHandler}/>
            </div>
        <div className="navigation">
        <div className="logo-list"> 
          <div className="logo">
              <Link to="/" className="link">
              <img src="https://moneyhop.co/wp-content/uploads/2020/09/logo-blue.svg" alt="logo" />
              </Link>
          
              </div> 
              <div className="leftmenu-list">
              <ul className="nav-link">
                <li>
                    <a href="https://moneyhop.co/operate-spend/" >OPERATE & SPEND</a>
                </li>
                <li>SEND</li>
            </ul>
              </div>
          
        </div>
        <div className="navigation-list">
            <ul className="nav-link">
            <li><a href="https://moneyhop.co/about/" className="link">ABOUT</a></li>
                <li>
                    <a href="https://moneyhop.co/blog/" className="link">Blog</a></li>
                <li>HELP</li>
                <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLScNAgftJ0qb7If4omEAjhdafcz2o-LeMgv-ajXJYFcjELfKQw/viewform" className="btn">Early Access</Link></li>
            </ul>
        </div>

        </div>
        </div>
    )
}
}
export default NavHeader;