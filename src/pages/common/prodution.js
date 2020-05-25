import React from 'react';
import './common.scss';

function production(props) {
  return (
    <div className="production">
        <img src={props.img} alt="img"/>
        <p className="title">{props.title}</p>
        <p>{props.author}</p>
        <p>{props.content}</p>
    </div>
  );
}

export default production;
