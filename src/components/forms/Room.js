import React,{Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



class Room extends Component{

    state={
        id:"",
        name:"",
        floor:"",
        cap:"",
        a:"",
        b:"",
        projector:""


    };

    render()
    {
        return(

          <form align="center">
          <input 
          name="id"
          placeholder="Room Id"
          value={this.state.id}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="name"
          placeholder="Room Name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
            
        <input
          name="cap"
          placeholder="Capacity"
          value={this.state.cap}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <input
          name="floor"
          placeholder="Floor"
          value={this.state.floor}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <input
          name="a"
          placeholder="Availability"
          value={this.state.a}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>

        <input
          name="b"
          placeholder="Board"
          value={this.state.b}
          onChange={e => this.change(e)}
        />
        <br/>
        <br/>
        <input
          name="projector"
          placeholder="Projector"
          value={this.state.projector}
          onChange={e => this.change(e)}
        />
        <br/>
        <br/>
       <button class ="button" onClick={e => this.onSubmit(e)}>OK</button>
       <Link to="/Log_in"> <button className="button" >Back</button></Link>
      </form>
        );
    }

    change = e => {
        console.log('working ', e.target.name, e.target.value, this.state, this.props)

        this.setState({
          [e.target.name]: e.target.value
    });
    }

    onSubmit = e => {
        e.preventDefault();

     axios.post(`http://localhost:8080/room/details`, this.state)
            .then(res=>{
            console.log(res.data)
              this.setState({
              id: "",
              name: "",
              floor:"",
              cap:"",
              a: "",
              b: "",
              projector:""
            });
            })
    };

}

export default Room;