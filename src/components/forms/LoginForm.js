import React, { Component } from 'react';
import { AppBar, TextField, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      userid:'',
      password:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleChange(event)
  {
    this.setState({userid:event.target.newValue});
    this.setState({password:event.target.newValue});
    
  }
  handleSubmit(event)
  {
    alert("login");
  }

  render() {
    return (
<form align="center" class="fieldborder">
  <div>
    <label for="fname" class="label1" >EMAIL ID</label>
    <br/>
    <input type="text" id="email" name="email" placeholder="Your email.."/>
      <br/>
      <br/>
    <label class="label1" for="lname">PASSWORD </label>
    <br/>
  
    <input type="text" id="password" type="password" name="password" placeholder="Your password.."/>
    <br/>
    <br/>
    </div>
  
  

    </form>
    );
  }
}
const style = {
  margin: 15,
};

export default LoginForm;
