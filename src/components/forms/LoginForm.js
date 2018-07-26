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
/*      <div >
      
      

      <form align ="center">
      <input
        name="userName"
        placeholder="Username"
        value={this.state.userName}
        onChange={e => this.change(e)}
      />
      <br />
      <input
        name="employeeid"
        placeholder="Employee id"
        value={this.state.employeeid}
        onChange={e => this.change(e)}
      />
      <br />
      <button   class ="button" onClick={e => this.onSubmit(e)}>LOG IN</button>
      </form>
</div>*/
<form >
  <fieldset >
    <label for="fname" class="label1" >EMAIL ID</label>
    <br/>
    <input type="text" id="email" name="email" placeholder="Your email.."/>
      <br/>
    <label class="label1" for="lname">PASSWORD </label>
    <br/>
  
    <input type="text" id="password" type="password" name="password" placeholder="Your password.."/>
    </fieldset>
    </form>
    );
  }
}
const style = {
  margin: 15,
};

export default LoginForm;
