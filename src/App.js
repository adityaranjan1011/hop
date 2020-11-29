// import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Prompt } from 'react-router'
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import BackDrop from "./Components/BackDrop";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      sidedrawerOpen:false
    }
  };

  drawerToggleClickHandler =() =>{
    this.setState((prevState) => {
      return{
        sidedrawerOpen:!prevState.sidedrawerOpen
      }
      
    })
  }

  backDropClickListener = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return{
        sidedrawerOpen:!prevState.sidedrawerOpen
      }
      
    })
  }


  render() { 
   let sideDrawer;
   let backDrop;
   
   if(this.state.sidedrawerOpen){
     sideDrawer = <SideDrawer/>;
     backDrop = <BackDrop backDropclick={this.backDropClickListener}/>
   }

   return (
    <Router> 
      <React.Fragment>
      {/* <Prompt
      // when={shouldBlockNavigation}
      message='You have unsaved changes, are you sure you want to leave?'
    /> */}
        <div className="App">
        <Switch>
  <Route path="/" exact component={() => <Home drawerClickHandler={this.drawerToggleClickHandler} /> }/>
          <Route path="/aboutHop" component={About} />
          <Route path="/blog" component={Blog} />
          </Switch>
          {/* <SideDrawer show={!this.state.sidedrawerOpen} /> */}
          {sideDrawer}
          {backDrop}
        
        </div>
        </React.Fragment>  
    </Router>
  );
}
}

export default App;
