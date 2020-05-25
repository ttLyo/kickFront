import React from 'react';
import {Button,Input, Menu, Dropdown} from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './common.scss';
const {Search} = Input
const logOut=()=>{
  document.cookie=""
}
const menu = (
  <Menu>
    <Menu.Item>
      <a onClick={logOut}>
        退出登录
      </a>
    </Menu.Item>
  </Menu>)
function header() {
  let person=document.cookie==""?
  (<Link to="/loginAndRegister"><Button className="btn_login" type="link">登录/注册</Button></Link>):
  (<Dropdown overlay={menu}>
    <Link className="ant-dropdown-link" to={"/person/"+document.cookie}>
      {document.cookie}<DownOutlined />
    </Link>
  </Dropdown>)
  return (
    <div className="header">
        <Link to="/"><span className="web_name">ICOLLECT</span></Link>
        <Link to="/loginAndRegister"><Button className="btn_login" type="link">登录/注册</Button></Link>
        <Search className="search" ></Search>
    </div>
  );
}

export default header;
