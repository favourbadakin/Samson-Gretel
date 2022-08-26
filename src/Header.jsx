import React from 'react';
import { Spiral as Hamburger } from 'hamburger-react';

export default function Header(){
    return(
        <header>
            <nav>
                <h3>Samson &#38; Gretel</h3>
                <ul>
                    <li><a className='nav-a' href='/#'>Home</a></li>
                    <li><a className='nav-a' href='#about-us'>About Us</a></li>
                    <li><a className='nav-a' href='#services'>Services</a></li>
                    <li><a className='nav-a' href='#our-team'>Our Team</a></li>
                    <li className='btn'><a href='/#'>Contact Us</a></li>
                </ul>
                <span className='hamburger'><Hamburger color='#555555' /></span>
            </nav>
            <div className='header-wrap'>
                <h1>A firm that backs you up with efficiency and great results</h1>
                <a className='btn' href='/#'>CONTACT US</a>
            </div>
        </header>

    )
}