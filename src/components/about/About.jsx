import React from 'react';
import './about.css';
import Feature from './../feature/Feature'

const About = () => {
    return (
        <div className='medisafe__about section__margin' id='about'>
            <div className='medisafe__about-feature'>
                <Feature title='What is Medisafe' text='Medisafe is a modern and revolutionary medical pills tracker. Input your prescriptions and let the application manage and remind you when to take them. Live a stress-free life with medisafe.'/>
            </div>
            <div className='medisafe__about-heading'>
                <h1 className='gradient__text'>A tracker made for you</h1>
                <p>Meet the team</p>
            </div>
            <div className='medisafe__about-container'>
                <Feature title='Medications' text='Track which pill you are currently taking.'/>
                <Feature title='Notifications' text='Track when you have to take your next pill.'/>
            </div>
        </div>
    )
}

export default About;