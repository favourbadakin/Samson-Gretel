import React from 'react';

export default function Header(){
    return(
        <header>
            <nav>
                <h3>Samson &#38; Gretel</h3>
                <ul>
                    <li><a href='/#'>Home</a></li>
                    <li><a href='/#'>About Us</a></li>
                    <li><a href='/#'>Services</a></li>
                    <li><a href='/#'>Our Team</a></li>
                    <li className='btn'><a href='/#'>Contact Us</a></li>
                </ul>
            </nav>
            <div>
                <h1>A firm that backs you up with efficiency and great results</h1>
            </div>
        </header>

    )
}