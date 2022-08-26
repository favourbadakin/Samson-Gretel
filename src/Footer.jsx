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
                    <p className='fav'><a className='twitter' href='https://www.twitter.com/fav_bdk'>Developed with love by Fave⚡</a></p>
                </div>
                <div className='icon-wrap'>
                    <a className='facebook' href='/#'><GrFacebookOption /></a>
                    <a className='instagram' href='/#'><AiFillInstagram /></a>
                    <a className='twitter' href='https://www.twitter.com/fav_bdk'><BsTwitter /></a>
                </div>
            </div>
        </section>
    )}