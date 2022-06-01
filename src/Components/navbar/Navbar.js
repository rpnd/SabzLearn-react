import React from 'react';
import './Navbar.css';
import Box_navbar from './box_navbar/Box_navbar';

export default function Navbar() {

    const allProduct1 = [
        {text : "آموزش HTML"},
        {text : "آموزش CSS"},
        {text : "آموزش Flexbox"},
        {text : "آموزش Cssgrid"},
        {text : "آموزش Emmet"},
        {text : "آموزش اصولی طراحی قالب"},
        {text : "آموزش جاوااسکریپت"},
        {text : "آموزش بوت استرپ"},
        {text : "آموزش ReactJs"},
        {text : "آموزش ویو جی اس"},
        {text : "آموزش وی اس کد - VsCode"},
        {text : "آموزش NPM"}
    ]

    const allProduct2 = [
        {text : "نقشه راه ورود به دنیای امنیت"},
        {text : "شبکه با گرایش امنیت"},
        {text : "لینوکس با گرایش امنیت"},
        {text : "آموزش هکر قانونمند _ CEH 711"},
        {text : "آموزش کالی لینوکس"},
        {text : "آموزش پایتون سیاه"},
        {text : "آموزش Brup Suite"},
        {text : "آموزش جاوااسکریپت سیاه"}
    ]

    const allproduct3 = [
        {text : "اچ تی ام ال"},
        {text : "بوت استرپ"},
        {text : "پروژه های برنامه نویسی"},
        {text : "تست نفوذ و امنیت"},
        {text : "جی کوئری"},
        {text : "ریکت جی اس"},
        {text : "سی اس اس"},
        {text : "شروع برنامه نویسی"},
        {text : "طراحی سایت"},
        {text : "ویو جی اس"}
    ]

    const allProduct4 = [
        {icon : "fas fa-user" , text : "داشبورد کاربری"},
        {icon : "fa-solid fa-bag-shopping icon_2_navbar" , text : "سفارش ها"},
        {icon : "fas fa-user-pen" , text : "ویرایش حساب"},
        {icon : "fas fa-wallet" , text : "کیف پول : 0 تومان"},
        {icon : "fas fa-arrow-right-from-bracket" , text : "خروج"}
    ]

  return (
    <div className='navbar'>
        <div className='right_navbar'>
            <div className='image_logo_navbar'>
                <img src="images/logo-one-copy.png" alt="" />
            </div>
            <i className='fas fa-bars' id='bars'></i>
            <nav>
                <ul>
                    <li><a href="#">صفحه اصلی</a></li>
                    <li>
                        <a href="#">فرانت اند</a>
                        <i class="fa-solid fa-angle-down"></i>
                        <ul className='box_navbar1 navigation'>
                            <Box_navbar {...allProduct1[0]}></Box_navbar>
                            <Box_navbar {...allProduct1[1]}></Box_navbar>
                            <Box_navbar {...allProduct1[2]}></Box_navbar>
                            <Box_navbar {...allProduct1[3]}></Box_navbar>
                            <Box_navbar {...allProduct1[4]}></Box_navbar>
                            <Box_navbar {...allProduct1[5]}></Box_navbar>
                            <Box_navbar {...allProduct1[6]}></Box_navbar>
                            <Box_navbar {...allProduct1[7]}></Box_navbar>
                            <Box_navbar {...allProduct1[8]}></Box_navbar>
                            <Box_navbar {...allProduct1[9]}></Box_navbar>
                            <Box_navbar {...allProduct1[10]}></Box_navbar>
                            <Box_navbar {...allProduct1[11]}></Box_navbar>
                        </ul>
                    </li>
                    <li>
                        <a href="#">امنیت</a>
                        <i class="fa-solid fa-angle-down"></i>
                        <ul className='box_navbar2 navigation'>
                            <Box_navbar {...allProduct2[0]}></Box_navbar>
                            <Box_navbar {...allProduct2[1]}></Box_navbar>
                            <Box_navbar {...allProduct2[2]}></Box_navbar>
                            <Box_navbar {...allProduct2[3]}></Box_navbar>
                            <Box_navbar {...allProduct2[4]}></Box_navbar>
                            <Box_navbar {...allProduct2[5]}></Box_navbar>
                            <Box_navbar {...allProduct2[6]}></Box_navbar>
                            <Box_navbar {...allProduct2[7]}></Box_navbar>
                        </ul>
                    </li>
                    <li>
                        <a href="#">مقالات</a>
                        <i class="fa-solid fa-angle-down"></i>
                        <ul className='box_navbar3 navigation'>
                            <Box_navbar {...allproduct3[0]}></Box_navbar>
                            <Box_navbar {...allproduct3[1]}></Box_navbar>
                            <Box_navbar {...allproduct3[2]}></Box_navbar>
                            <Box_navbar {...allproduct3[3]}></Box_navbar>
                            <Box_navbar {...allproduct3[4]}></Box_navbar>
                            <Box_navbar {...allproduct3[5]}></Box_navbar>
                            <Box_navbar {...allproduct3[6]}></Box_navbar>
                            <Box_navbar {...allproduct3[7]}></Box_navbar>
                            <Box_navbar {...allproduct3[8]}></Box_navbar>
                            <Box_navbar {...allproduct3[9]}></Box_navbar>
                        </ul>
                    </li>
                    <li><a href="#">آموزش پایتون</a></li>
                </ul>
            </nav>
        </div>
        <div className='left_navbar'>
            <div>
                <i className='fas fa-search'></i>
                <i class="fa-solid fa-bag-shopping"></i>
                <span>Abolfazl_6781</span>
                <ul className='box_navbar4 navigation'>
                    <Box_navbar {...allProduct4[0]}></Box_navbar>
                    <Box_navbar {...allProduct4[1]}></Box_navbar>
                    <Box_navbar {...allProduct4[2]}></Box_navbar>
                    <Box_navbar {...allProduct4[3]}></Box_navbar>
                    <Box_navbar {...allProduct4[4]}></Box_navbar>
                </ul>
            </div>
        </div>
    </div>
  )
}
