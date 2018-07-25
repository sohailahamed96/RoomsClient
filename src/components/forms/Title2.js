import React,{Component} from 'react';

class Title2 extends Component{
    render()
    {
        return (<h1>
            {this.props.tasks}
        </h1>)
    }
}
export default Title2