import React, { Component } from 'react';

class Counter extends Component {


    //  styles={
    //     fontSize:10,
    //     fontWeight:"bold"

    //  }
   

 
     render() { 
        
        return (
            <div>
            <span style ={{fontSize:10}}className="badge badge-primary m-2 p-2">{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"> Increment</button>
            <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value===0?"disabled":""}> Decrement</button>
            <button onClick={this.props.onDelete}className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>
        {this.state.tags.map(tag=>< li key={tag}>{tag}</li>)}
             </ul> */}
            </div>
          );
    }

    formatCount=()=>{
        const value= this.props.counter.value;
        return value===0? 'Zero':value;
    }
}
 
export default Counter;