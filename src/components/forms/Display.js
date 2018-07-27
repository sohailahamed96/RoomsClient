import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Display extends Component

{
render()
{
return(
<div>
<ul>
  <Link to="/home"><li>Home</li></Link>
  <Link to="/viewrooms"><li>View All</li></Link>
  <li>Search rooms</li>
</ul>
<home/>
</div>
)
}

}

export default Display;