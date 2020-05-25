import React from 'react';
import './about.scss';
import Layout from "./chilren/account"


import SiderDemo from "./chilren/account";
import ReactDOM from 'react-dom';
ReactDOM.render(<SiderDemo />, document.getElementById('root'));



function about() {
  return (
    <div className="about">
        <Layout />
    </div>
  );
}

export default about;
