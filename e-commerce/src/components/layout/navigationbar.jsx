import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../resources/images/logo.jpg";
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'


function NavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light " >
      <div className="container rounded-top" style={{backgroundColor:"#2e4d0f"}} >
        <a className="navbar-brand " href="/">
          <img className='bg-white rounded shadow' src={Logo} alt='logo' style={{width:'7.5rem',height:'4.5rem',backgroundColor:"#2e4d0f"}}/>
        </a>
        <button
          className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'} bg-white`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ml-2 ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-3">
            <li className="nav-item ">
              <a className="nav-link text-white " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                <AiOutlineSearch/>
              </a>
            </li>
          </ul>
          
        </div>
      
      <div className={`collapse navbar-collapse ml-auto  ${isNavOpen ? 'show' : ''}`} style={{backgroundColor:"#2e4d0f"}}>
          <ul className="navbar-nav item-container "  >
          <li className="nav-item item ">
              <a className="nav-link text-white" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item item item-container">
              <a className="nav-link text-white" href="/signup">
                Signup
              </a>
            </li>
          </ul>
          </div>
          </div>
    </nav>
  );
}

export default NavigationBar;
