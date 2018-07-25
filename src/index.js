//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import Main from './components/forms/Main';
//import './style/stylesheet.css'
//const displaytext=['useful fo entering data','useful fo entering data','helful for people'];
//const element=React.createElement("h1",null,"welcome");
//const elements=React.createElement('ol',null,
//displaytext.map((task,index) => React.createElement('li',{key:index},task)));
//ReactDOM.render(element,document.getElementById('root'));
//ReactDOM.render(elements,document.getElementById('root2'));
/*class Main extends Component {
    render(){
        return <div>
            <Title title={"LOGIN"}/>
            <List tasks={['find empty room','view rooms']}/>
            <List tasks={['login into your account','view details']}/>
            </div>
    }
}*/
//ReactDOM.render(<Main/>,document.getElementById('root') );
import React from 'react';
import ReactDOM from 'react-dom';
import { Signup, Homepage, Login } from './components/forms/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/stylesheet.css';
import Main from './components/forms/Main';
//import App from './components/forms/App';
//import Title from'./components/forms/Title';
//import registerServiceWorker from './registerServiceWorker';
//ReactDOM.render(<Title />, document.getElementById('root2'));
ReactDOM.render(
<Router><div>
    <Route exact path="/Homepage" component={Homepage}/>
    <Route exact path="/Sign_up" component={Signup} />
    <Route exact path="/Log_in" component={Login}/>
</div>
</Router>,
document.getElementById('root'));
//registerServiceWorker();