import React from 'react';
import CountUp from 'react-countup';

export default function Numbers(){
    return(
        <section className='section-numbers'>
            <div className='numbers-wrap'>
            <div className='num-flex'>
                <h3><CountUp end={2000} duration={4.4} /></h3>
                <p>Clients</p>
            </div>
            <div className='num-flex'>
                <h3><CountUp end={1500} duration={3.9}/></h3>
                <p>Solved cases</p>
            </div>
            <div className='num-flex'>
                <h3><CountUp end={700} duration={2.8}/></h3>
                <p>Awards</p>
            </div>

            <div className='num-flex'>
                <h3><CountUp end={500} duration={1.7}/></h3>
                <p>Pro bono</p>
            </div>
            </div>
        </section>
    )}