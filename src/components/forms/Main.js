import React,{Component} from 'react';
/*import List from './List';*/
import Title2 from './Title2';
//import { Button, View, Text } from 'react-native';
//import { createStackNavigator } from 'react-navigation';
//import LoginForm from './LoginForm';
import {Button} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
import Form from './Form';
import LoginForm from './LoginForm';
import AllUser from './AllUser';

const Homepage = () =>{
    return (
        <div className="title">
        <Title2 tasks={"Rooms Availability"}/>
        <p  align="center">
        <Link to ="/Sign_up"><button class="button">Sign Up</button></Link>
        </p>
        <p align="center">
        <Link to="/Log_in"><button class="button">Log In</button></Link>
        </p>
        
        </div>
    )
}
const Signup = () => {
    return (
        <div>
             <Title2 tasks={"Sign Up :)"}/>
             <br/>
        <Form/>
        <p  >
        <Link to ="/Homepage"><button class="button">Back</button></Link>
        </p>
        </div>
    )
}
const Login =() =>{
    return (
        
<div>
            
             <Title2 tasks={"Log in "}/>
             <br/>
             
             <p  >
           <LoginForm/>
           <br/>
        <Link to ="/Homepage"><button class="button">Back</button></Link>
        </p>
        </div>
    )
}
/*
class Main extends Component{
    render ()
    {
       /* return (<div>
            <Title title ={"OFFICE MAPS"}/>
            <List display_tasks={['sign in ','login']}/>
            <List display_tasks={['list all rooms','book rooms']}/>
        </div> )
        return (
            
           /* <div>
            <Title/>
            
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Form')}
            />
          
         <div>
             <Title/>
         
        </div>
           
          
        )

    }
}
module.exports = {
    Title,
    List
};*/
export  {
    Homepage,
    Signup,
    Login
};
// export  default List;  