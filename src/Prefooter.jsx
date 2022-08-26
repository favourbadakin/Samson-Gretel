import React from 'react';
import location from './images/location.png';
import call from './images/call.png';
import message from './images/message.png';

export default function Prefooter(){
    return(
        <section id='contact-us' className='section-prefooter'>
            <div>
                <h2>SAMSON &#38; GRETEL</h2>
                <p className='last'>Aliqua culpa cillum amet elit dolore pariatur sit qui ut.</p>
                <div className='contact-flex'>
                    <div className='item'>
                        <img src={location} alt="location" />
                        <p>358, Beverly View, New York</p>
                    </div>
                    <div className='item'>
                        <img src={call} alt="call" />
                        <p>917-849-2585</p>
                    </div>
                    <div className='item'>
                        <img src={message} alt="message" />
                        <p>contact@samsonandgretel.com</p>
                    </div>
                </div>
            </div>
        </section>
    )}