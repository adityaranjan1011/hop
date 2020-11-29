import React from "react";

const SideDrawer = (props) => {
    let drawerClasses = 'sidedrawer';
    
    if(props.show){
        drawerClasses = 'sidedrawer open';
    }
    return(
  <nav className={drawerClasses}>
    <ul className="siderNav">
      <li>
        <a href="https://moneyhop.co/operate-spend/">OPERATE & SPEND</a>
      </li>
      <li>SEND</li>
      <li>
        <a href="https://moneyhop.co/about/" >
          ABOUT
        </a>
      </li>
      <li>
        <a href="https://moneyhop.co/blog/"  >
          Blog
        </a>
      </li>
      <li>HELP</li>
      <li>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScNAgftJ0qb7If4omEAjhdafcz2o-LeMgv-ajXJYFcjELfKQw/viewform"
        >
          Early Access
        </a>
      </li>
    </ul>
  </nav>
)
}
export default SideDrawer;
