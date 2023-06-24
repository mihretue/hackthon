import React from 'react';
import Button  from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../layout/navigationbar"
import bgImage from '../../resources/images/bg2.jpg'
import Women from "../../resources/images/woman.jpg"
import Brandnam from "../../resources/images/brandnames.jpg"
import "./style.css"
import Bricsk from "../../resources/images/brickbg.jpg"
import Ford from "../../resources/images/backgg.jpg"
import Bricsk2 from "../../resources/images/bzzzz.jpg"

function Home() {


  return (
    
    <div className='container '  >
        <div>
            {<Navbar/>}
        </div>
            <div className='container '  style={{
            backgroundImage: `url(${Bricsk2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            }}>
                <div className='row'> 
                <div className='col-lg-4 d-none d-lg-block' >
                    <div className='card mt-4'style={{backgroundColor:"#26364f",color:"white"}}>
                        <div className='card-body'>
                            <h2 className='card-title text-center' style={{color:"yellow"}}>eGiza</h2>
                        <p className='card-text text-center'>Brand Electronics For you</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 ' style={{display:"flex",alignItems:"center",justifyContent:"center",height:'100vh'}}>
                    <img src={Brandnam} alt='brand names' className=' border' style={{width:"",height:"20%",alignItems:"center",justifyContent:"center"}}>
                    
                    </img>
                    <Button className='glow-on-hover bg-white btn mb-5 btn-primary btn-overlay position-absolute bottom-0 start-50 translate-middle-x bg-dark' style={{width:'20%'}}>Explore</Button>
                    
                </div>
                <div className='col-lg-4   d-none d-md-block ' >
                    {/* <img src={Ford} alt='elc image' style={{width:"370px",marginLeft:"-10px",height:"100vh"}}/> */}
                    <div className='row'>
                        <div className='col'>sdkl;fksdfsdf</div>
                        <div className='col'>sdkl;fksdfsdf</div>
                        <div className='col'>sdkl;fksdfsdf</div>
                        <div className='col'>sdkl;fksdfsdf</div>

                    </div>
                </div>
                </div>
            </div>

    </div>
  );
}

export default Home;
