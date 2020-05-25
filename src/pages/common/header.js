import React from 'react';
import {Button,Input} from "antd"
import { Link } from 'react-router-dom'
import './common.scss';
const {Search} = Input

function header() {
  return (
    <div className="header">
        <Link to="/"><span className="web_name">ICOLLECT</span></Link>
        <Link to="/loginAndRegister"><Button className="btn_login" type="link">登录/注册</Button></Link>
        <Search className="search" ></Search>
    </div>
  );
}

export default header;
