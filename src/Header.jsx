import  React, { useEffect } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';

export default function Header(){
    const [isOpen, setOpen] = React.useState(false)
   
    const handleToggle = () => {
        setOpen(prev => !prev)
        }


        useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        });
    
               
        /* Method that will fix header after a specific scrollable */
               const isSticky = (e) => {
                    const header = document.querySelector('.nav-section');
                    const scrollTop = window.scrollY;
                    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
                };

    return(
        <header>
            <nav className='nav-section'>
                <h3>Samson &#38; Gretel</h3>
                <ul className={`nav-ul ${isOpen ? " nav-ul" : "showMenu"}`}>
                    <li><a className='nav-a' href='/#'>Home</a></li>
                    <li><a className='nav-a' href='#about-us'>About Us</a></li>
                    <li><a className='nav-a' href='#services'>Services</a></li>
                    <li><a className='nav-a' href='#our-team'>Our Team</a></li>
                    <li className='btn'><a href='#contact-us'>Contact Us</a></li>
                </ul>
                <span className='hamburger'><Hamburger toggled={isOpen} toggle={handleToggle} color='#FEFEFE' /></span>
            </nav>
            <div className='header-wrap'>
                <h1>A firm that backs you up with efficiency and great results</h1>
                <a className='btn header-btn' href='#contact-us'>CONTACT US</a>
            </div>
        </header>

    )
}