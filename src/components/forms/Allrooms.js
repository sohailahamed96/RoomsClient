import React from 'react';

import axios from 'axios';

import Display from './Display.js';

 

export default class AllUser extends React.Component {
  state = {
    rooms: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/room/all`)
      .then(res => {
        const rooms = res.data;
        this.setState({ rooms });
      })
  }

  render() {
    return (
     <div>
       <Display/>
       <br/>
       <br/>
      <div>
       <table id="people_info">
         <caption class="label1">ROOMS</caption>
         <tr>
           <th>Room Id</th>
           <th>Name</th>
           <th>Floor</th>
           <th>Capacity</th>
           <th>Projector</th>
           <th>Availability</th>
           <th>Boards</th>
           </tr>
         </table>
         </div>
          <table id="people_info">
        { 
          this.state.rooms.map(room=>
            <tr>
            <td>{room.id}</td>
            <td>{room.name}</td>
            <td>{room.floor}</td>
            <td>{room.cap}</td>
            <td>{room.projector}</td>
            <td>{room.a}</td>
            <td>{room.b}</td>
            </tr>
           
            )
       
 

    }
      </table>  
    </div> 
    )
  }
}

