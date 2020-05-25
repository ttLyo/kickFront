import React from 'react';
import { Link } from 'react-router-dom'
import './common.scss';

function production(props) {
  return (
    <Link to={"/detail/"+props.id} className="production">
      <img src={props.img} alt="img"/>
      <p className="title">{props.title}</p>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </Link>
  );
}

export default production;
