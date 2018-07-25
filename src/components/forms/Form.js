import React from "react";
import axios from 'axios';

export default class Form extends React.Component {
  state = {
    name: "",
    id: "",
    em: "",
    gender: "",
    pass: ""
  };

  change = e => {
    console.log(' working ', e.target.name, e.target.value, this.state, this.props)
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this);
    let name = this.state
    // this.props.onSubmit(this.state);


    axios.post(`http://localhost:8080/signup`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          Name: "",
          id: "",
          gender:"",
          em: "",
          pass: ""
        });
      })

    

    // this.props.onChange({
    //   userName: "",
    //   employeeid: "",
      
    //   gender:"",
    //   email: "",
    //   password: ""
    // });
  };

  render() {
    return (
      <form align ="center">
        <input
          name="name"
          placeholder="Username"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="id"
          placeholder="Employee id"
          value={this.state.id}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <input
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <input
          name="em"
          placeholder="Email"
          value={this.state.em}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <input
          name="pass"
          type="password"
          placeholder="Password"
          size="45"
          text-size="35"
          value={this.state.pass}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <button   class ="button" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}