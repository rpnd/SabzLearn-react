import React from 'react';
import './Box_latest_courses.css';

export default function Box_latest_courses(props) {
  return (
    <div className='Box_latest_courses'>
        <img src={props.img} alt="" />
        <i className={props.icon_play} id="icon_play"></i>
        <h5>{props.h5}</h5>
        <div className='text_star'>
            <div className='right_text_star'>
                <i className={props.icon1}></i>
                <p>{props.p}</p>
            </div>
            <div className='left_text_star'>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
            </div>
        </div>
        <div className='bottom'>
            <div className='right_bottom'>
                <i className={props.icon_1}></i>
                <p>{props.p2}</p>
            </div>
            <div className='left_bottom'>
                <p className='last_price_box_last_courses'>{props.newprice}</p>
                <p className='price_box_last_courses'>{props.price}</p>
            </div>
        </div>
    </div>
  )
}

/*
        <img src={props.img} alt="" />
        <h2>{props.h2}</h2>
        <div className='text_star'>
            <div className='right_text_star'>
                <i className={props.icon}></i>
                <p>{props.p}</p>
            </div>
            <div className='left_text_star'>
                <i className={props.star}></i>
            </div>
        </div>
        <div className='bottom'>
            <div className='right_bottom'>
                <i className={props.icon2}></i>
                <p>{props.p2}</p>
            </div>
            <div className='left_bottom'>
                <p>{props.price}</p>
                <p>{props.newprice}</p>
            </div>
        </div>
*/
