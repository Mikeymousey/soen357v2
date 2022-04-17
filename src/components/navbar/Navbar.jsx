import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from'../../assets/logo.png';
import { Routes, Link, NavLink} from 'react-router-dom';

const Menu = () => (
  <>
  <p><Link exact to='/'>Home</Link></p>
  <p><Link exact to='/about'>About</Link></p>
  <p><Link exact to='/medications'>Medications</Link></p>
  <p><Link exact to='/notifications'>Notifications</Link></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className = 'medisafe__navbar'>
      <div className= 'medisafe__navbar-links'>
        <div className='medisafe__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='medisafe__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='medisafe__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='medisafe__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='medisafe__navbar-menu_container scale-up-center'>
            <div className='medisafe__navbar-menu_container-links'>
              <Menu />
              <div className='medisafe__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar