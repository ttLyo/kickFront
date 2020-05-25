import React from 'react';
import './home.scss';
import Nav from "./chilren/nav"
import Activity from "./chilren/activity"
import Hot from "./chilren/hot"
import Categaries from "./chilren/categories"

function home() {
  return (
    <div className="home">
        <Nav />
        <Activity />
        <Hot />
        <Categaries />
    </div>
  );
}

export default home;
