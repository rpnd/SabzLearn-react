import React from 'react';
import './Box_navbar.css';

export default function Box_navbar(props) {
  return (
    <div className='box_navbar'>
        <i className={props.icon}></i>
        <li><a href="#">{props.text}</a></li>
    </div>
  )
}
