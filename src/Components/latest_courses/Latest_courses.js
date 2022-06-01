import React from 'react';
import './Latest_courses.css';
import Box_latest_courses from './box_latest_courses/Box_latest_courses';

export default function Latest_courses() {

  const all_product = [
    {img : "images/last_courses/img_1.png" , icon_play : "fas fa-play play_courses" , h5 : "کسب درامد از یوتیوب برای متخصصین" , icon1 : "fas fa-chalkboard-teacher" , p : "قدیر یلمه" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "2" , price :"3,000,000" , newprice :"1,900,000" },
    {img : "images/last_courses/img_2.png" , icon_play : "fas fa-play play_courses" , h5 : "دوره جامع آموزش پایتون [2022]" , icon1 : "fas fa-chalkboard-teacher" , p : " رضا دولتی" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "7,354" , price :"6,000,000" , newprice :"رایگان" },
    {img : "images/last_courses/img_3.png" , icon_play : "fas fa-play play_courses" , h5 : "تست نفوذ با کالی لینوکس – PWK [سناریو محور]" , icon1 : "fas fa-chalkboard-teacher" , p : "اشکان مقدس" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "138" , price :"380,000 " , newprice :"" },
    {img : "images/last_courses/img_4.png" , icon_play : "fas fa-play play_courses" , h5 : "اموزش لینوکس با گرایش امنیت" , icon1 : "fas fa-chalkboard-teacher" , p : " اشکان مقدس" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "176" , price :"250,000" , newprice :"" },
    {img : "images/last_courses/img_5.png" , icon_play : "fas fa-play play_courses" , h5 : "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار" , icon1 : "fas fa-chalkboard-teacher" , p : " محمد امین سعیدی راد" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "105" , price :"290,000 " , newprice :"" },
    {img : "images/last_courses/img_6.png" , icon_play : "fas fa-play play_courses" , h5 : "پروژه های خلاقانه با جاوااسکریپت" , icon1 : "fas fa-chalkboard-teacher" , p : " محمد امین سعیدی راد" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "140" , price :"320,000" , newprice :"" },
    {img : "images/last_courses/img_7.png" , icon_play : "fas fa-play play_courses" , h5 : "آموزش شبکه با گرایش امنیت | Black Network" , icon1 : "fas fa-chalkboard-teacher" , p : " اشکان مقدس" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "174" , price :"300,000 " , newprice :"" },
    {img : "images/last_courses/img_8.png" , icon_play : "fas fa-play play_courses" , h5 : "پروژه های خلاقانه با Html و Css" , icon1 : "fas fa-chalkboard-teacher" , p : "امیر الهی" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "7,354" , price :"100,000" , newprice :"رایگان" },
    {img : "images/last_courses/img_9.png" , icon_play : "fas fa-play play_courses" , h5 : "آموزش حرفه ای طراحی قالب با Html Css FlexBox از صفر" , icon1 : "fas fa-chalkboard-teacher" , p : " حمید رضا عبادی" , star : "fas fa-star" , icon_1 : "fas fa-users", p2 : "123" , price :"240,000 " , newprice :"" }
  ]

  return (
    <div className='latest_courses'>
        <div className='top_text_Latest_courses'>
            <div className='right_Latest_courses'>
                <h2>جدید ترین دوره ها</h2>
                <p>سکوی پرتاب شما به سمت موفقیت</p>
            </div>
            <div className='left_Latest_courses'>
                <button>تمام دوره ها</button>
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
        <div className='box_last_courses'>
          <Box_latest_courses {...all_product[0]}></Box_latest_courses>
          <Box_latest_courses {...all_product[1]}></Box_latest_courses>
          <Box_latest_courses {...all_product[2]}></Box_latest_courses>
          <Box_latest_courses {...all_product[3]}></Box_latest_courses>
          <Box_latest_courses {...all_product[4]}></Box_latest_courses>
          <Box_latest_courses {...all_product[5]}></Box_latest_courses>
          <Box_latest_courses {...all_product[6]}></Box_latest_courses>
          <Box_latest_courses {...all_product[7]}></Box_latest_courses>
          <Box_latest_courses {...all_product[8]}></Box_latest_courses>
        </div>
    </div>
  )
}
