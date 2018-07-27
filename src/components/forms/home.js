import React,{Component} from 'react';
import Display from './Display.js';
import Title2 from './Title2.js';

class home extends Component{
    render()
    {
        return(
        <div>
            <Display/>
            <br/>
            <br/>
            <p1 class="p2">
            <Title2 tasks={"Welcome to Office Rooms!!"}/>
            </p1>
        </div>
    )
}   
}

export default home;
