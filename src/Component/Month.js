import React from "react";
import '../App.css';

const Month =(props)=>{
    return(
      <p className='month'>
     	 {props.state}
      </p>
      );
  }
export default Month;