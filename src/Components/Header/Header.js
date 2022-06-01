import React from 'react';
import './Header.css';
import Box_header from './box_header/Box_header';

export default function Header() {

  const allProduct = [
      {img : "images/Header/box/img_1.png" , h2 : "21,310" , p : "کاربر توی سبزلرن ثبت نام کردن"},
      {img : "images/Header/box/img_2.png" , h2 :  "34" , p : "دوره آموزشی داریم"},
      {img : "images/Header/box/img_3.png" , h2 : "26,520" , p : "دقیقه آموزش تولید کردیم"}
  ]

  return (
    <div className='header'>
        <div>
            <h1>ما به هر قیمتی دوره آموزشی تولید نمی کنیم !</h1>
            <p>با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</p>
            <div className='search_bar_header'>
              <input type="search" placeholder='چی دوست داری یاد بگیری...؟!' id='input_header'/>
              <label for="input_header" className='fas fa-search'></label>
            </div>
            <div className='all_box_header'>
                <Box_header {...allProduct[0]}></Box_header>
                <Box_header {...allProduct[1]}></Box_header>
                <Box_header {...allProduct[2]}></Box_header>
            </div>
        </div>
    </div>
  )
}
