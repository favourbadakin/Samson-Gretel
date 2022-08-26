import React from 'react';
import person from './images/person.png';
import people from './images/people.png';
import family from './images/family.png'

export default function Areas(){
    return(
        <section id='services' className='section-areas'>
            <div>
                <h2>Areas of Practise</h2>
                <p>Aliqua culpa cillum amet elit dolore pariatur sit qui ut.</p>

              <div className='area-flex'>
                <div>
                    <img src={person} alt='person' />
                    <h3>FINANCE LAW</h3>
                    <p className='areas-p'>Aliqua culpa cillum amet elit 
                        dolore quis sint labore ea eiusmod pariatur sit qui. 
                         Laborum est ad aliquip anim qui. </p>
                </div>
                <div>
                    <img src={people} alt='person' />
                    <h3>CRIMINAL LAW</h3>
                    <p className='areas-p'>Aliqua culpa cillum amet elit dolore quis sint labore ea eiusmod pariatur sit qui. 
                        Laborum est ad aliquip anim qui. </p>
                </div>
                <div>
                <img src={family} alt='family' />
                <h3>FAMILY LAW</h3>
                <p className='areas-p'>Aliqua culpa cillum amet elit dolore quis sint labore ea eiusmod pariatur sit qui .
                     Laborum est ad aliquip anim qui. </p>
                </div>
              </div>
            </div>
        </section>
    )}