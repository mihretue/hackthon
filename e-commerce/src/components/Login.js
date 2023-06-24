import React from "react";
import { useState } from "react";
import {MdFacebook} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {AiFillGoogleCircle} from "react-icons/ai";
import {PiLockKeyFill} from "react-icons/pi";
import {BiSolidUser} from "react-icons/bi";
//import { Link } from "react-router-dom";

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    return(
        <div className="div1">
            <div className="container div2 rounded bg-white mx-auto" style={{width:"60%"}}> 
            <form className="form1 d-block mx-auto" style={{width:"80%"}}>
                   <h1 className="text-center fw-bold mt-3 pt-4">Login</h1>
                   <label for="input1" class="form-label">Email address</label>
                   <div className="input-group d-flex">
                      <span className="input-group-text" id="input1" style={{width:"5%"}}><BiSolidUser size="medium"/></span>
                      <input type="text" class="form-control" id="input1" placeholder="name@gmail.com"/>
                   </div>
                   <label for="input2" class="form-label mt-3">Password</label>
                   <div className="input-group d-flex">
                      <span className="input-group-text" id="input2" style={{width:"5%"}}><PiLockKeyFill/></span>
                      <input type="password" class="form-control" id="input2" placeholder="password"/>
                   </div>
                   <a href="#" class="float-end mt-2" style={{textDecoration:"none",color:"gray",marginRight:"2rem"}}>Forgot password?</a>
                   <button type="submit" class="btn btn-primary d-block mx-auto mt-5" style={{width:"60%"}}>LOGIN</button>
                   <h6 className="text-center mt-3 pt-2">Signup using</h6>
                   <div className="text-center  fs-3">
                     <MdFacebook color="blue"/>
                     <FaTwitter color="green"/>
                     <AiFillGoogleCircle color="red"/>
                   </div>
                   <h6 className="text-center mt-3 pt-1">Or sign up using</h6>
                   <div className="text-center mt-1">
                   <a href="#" className="" style={{textDecoration:"none",color:"gray"}}>Sign up</a>    </div>
                  
            </form>
           </div>
       </div>
    );
};
export default Login;