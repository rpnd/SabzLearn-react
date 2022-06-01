import React from 'react';
import './Box_header.css';

export default function Box_header(props) {
  return (
    <div className='box_header'>
        <img src={props.img} alt="" />
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
    </div>
  )
}
