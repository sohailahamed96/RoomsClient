import React,{Component} from 'react';
import Title2 from './Title2';
import Form from './Form';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import Display from './Display.js';


const Homepage = () =>{
    return (
        <div className="title">
        <Title2 tasks={"OFFICE ROOMS"}/>
        <LoginForm/>
        <br/>
        <div align="center">
        <Link to="/Log_in"><button  className="button">Log In</button></Link>

        <Link to ="/Sign_up"><button className="button">Sign Up</button></Link>
        </div>
        
        </div>
    );
}
const Signup = () => {
    return (
        <div>
             <Title2 tasks={"Sign Up :)"}/>
             <br/>
        <Form/>
        <p  >
        <Link to ="/"><button className="button">Back</button></Link>
        </p>
        </div>
    )
}


const Loginadmin =() =>{
    return (
        <div align='center'>
        <Link to="/viewrooms"><button className="button">View Rooms</button></Link>
        <br/>
        <br/>
        <Link to="/addrooms"><button className="button">Add Rooms</button></Link>
        <br/>
        <br/>
        <Link to="/viewusers"><button className="button">View Users</button></Link>
        <br/>
        <br/>
        <Link to="/rooms"><button className="button">Rooms</button></Link>
        </div>
    )
}





export {
    Homepage,
    Loginadmin,Signup
};
