import React, { Component } from 'react';
import steer from './styles/Steer2.jpg';
import './styles/App.css';
import Login from "./components/login.js";
import Registration from "./components/Registration.js";
import Header from "./components/Header.js";


class Landing extends Component {
  render() {
    return (

      <div className="App">
       <Header />
        
        <div className="App-intro">
        Welcome
        </div>
        <img src={steer} className="App-logo" alt="logo" />
        <div>
      
        </div>
        <Registration />
        <Login />
        
      
        
      </div>

    );
  }
}

export default Landing;
