import React from 'react';

import axios from 'axios';

 

export default class AllUser extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/all`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
     <div>
          <table>
        { this.state.persons.map(person =>
        
            
                <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            </tr>
           
            )
       
 

    }
      </table>  
    </div> 
 
    
  /* <label><li>{this.persons}</li></label>
    */)
  }
}