import React from 'react';
import pills from '../../assets/pills.jpg';
import './home.css';

const Home = () => {

    return (
        <div className="medisafe__home section__padding" id="home">
            <div className="medisafe__home-content">
                <h1 className="gradient__text">Stay safe with Medisafe</h1>
            </div>

            <div className="medisafe__home-image">
            <img src={pills} alt='pills'/>
            </div>
        </div>
    )
    
}
  
export default Home;