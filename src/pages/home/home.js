import React from 'react';
import './home.scss';
import Nav from "./chilren/nav"
import Activity from "./chilren/activity"
import Hot from "./chilren/hot"

function home() {
  return (
    <div className="home">
        <Nav />
        <Activity />
        <Hot />
        
    </div>
  );
}

export default home;
