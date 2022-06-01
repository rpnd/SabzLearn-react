import React from 'react';
import './Top_bar.css';

export default function Top_bar() {
  return (
    <div className='container_topbar'>
        <div className='right_topbar'>
            <nav>
                <ul>
                    <li><a href="#">آموزش Html</a></li>
                    <li><a href="#">آموزش Css</a></li>
                    <li><a href="#">آموزش جاوااسکریپت</a></li>
                    <li><a href="#">آموزش بوت استرپ</a></li>
                    <li><a href="#">آموزش ریکت</a></li>
                    <li><a href="#">آموزش پایتون</a></li>
                    <li>0 تومان</li>
                </ul>
            </nav>
        </div>
        <div className='left_topbar'>
            <div>
                <ul>
                    <li className='phone_topbar'>
                        <a href="#">
                            <span>09334008385</span>
                            <i class="fa-solid fa-phone-flip"></i>
                        </a>
                    </li>
                    <li className='email_topbar'>
                        <a href="#">
                            <span>sabzlearn@gmail.com</span>
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
