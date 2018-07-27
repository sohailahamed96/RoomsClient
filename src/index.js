import React from 'react';
import {Homepage,Loginadmin,Signup,} from './components/forms/Main.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/stylesheet.css';
import Room from "./components/forms/Room.js";
import AllUser from './components/forms/AllUser.js';
import Allrooms from './components/forms/Allrooms.js';
import Display from './components/forms/Display.js';
import home from './components/forms/home.js';


ReactDOM.render(
<Router>
    <div>
    <Route exact path="/Sign_up"component={Signup}/>
    <Route exact path='/' component={Homepage}/>
    <Route exact path="/addrooms" component={Room}/>
    <Route exact path="/Log_in"component={Loginadmin}/>
    <Route exact path="/viewusers"component={AllUser}/>
    <Route exact path="/viewrooms"component={Allrooms}/>
    <Route exact path="/rooms" component={Display}/>
    <Route exact path="/home"component={home}/>
    </div>
</Router>,document.getElementById('root'));
