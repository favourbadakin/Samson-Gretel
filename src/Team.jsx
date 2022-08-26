import React from 'react';
import cofounder from './images/cofounder.jpg';
import paralegal from './images/paralegal.jpg';
import secretary from './images/secretary.jpg';
import partner from './images/partner.jpg';

export default function Team(){
    return(
    <section id='our-team' className='section-team'>
        <div>
            <h2>Meet Our Team</h2>
            <p>Aliqua culpa cillum amet elit dolore pariatur sit qui ut.</p>
            <div className='team-flex'>
                <div>
                    <img src={cofounder} alt='' />
                    <h4>SAMSON GREG</h4>
                    <p>Co-Founder</p>
                </div>

                <div>
                    <img src={paralegal} alt='paralegal' />
                    <h4>LAILA STRONG</h4>
                    <p>Paralegal</p>
                </div>

                <div>
                    <img src={partner} alt='partner' />
                    <h4>GRETEL BROWN</h4>
                    <p>Partner</p>
                </div>

                <div>
                    <img src={secretary} alt='secretary' />
                    <h4>LUCAS CAGE</h4>
                    <p>Secretary</p>
                </div>

            </div>
        </div>
    </section>
    )}