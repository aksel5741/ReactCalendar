import React from "react";
import Next from './next';
import Month from './Month';
import Prev from './prev';
import Arrow from'./arrow.js'
import '../App.css';

const Head=(props)=>{
    return(
      <div  className='header'>
        <Prev state={props.state.prev_month} sub={props.prev_month}  />
      	<Month state={props.state.month} />
      	<Arrow Show={props.Show} />
        <Next state={props.state.next_month} add={props.next_month} /> 
      </div>
      );
}

export default Head;
