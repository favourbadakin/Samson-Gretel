import React from 'react';
import { GrFacebookOption }from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

export default function Footer(){
    return(
        <section className='section-footer'>
            <div>
                <div className='footer-flex'>
                    <p>Copyright 2022</p>
                    <p>Designed with love by Fave⚡</p>
                </div>
                <div className='icon-wrap'>
                    <span><GrFacebookOption /></span>
                    <span><AiFillInstagram /></span>
                    <span><BsTwitter /></span>
                </div>
            </div>
        </section>
    )}