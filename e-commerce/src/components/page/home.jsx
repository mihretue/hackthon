import React from 'react';
import Button  from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../layout/navigationbar"
import bgImage from '../../resources/images/bg2.jpg'



function Home() {


  return (
    
    <div className='container'  >
        <div>{<Navbar/>}</div>
        <div className='container'  style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}>

        </div>

    </div>
  );
}

export default Home;
