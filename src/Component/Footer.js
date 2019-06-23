import React from "react";
import '../App.css';
import Events from './events.js';
import Currdate from './curr_date.js'

const Footer =(props)=>{
    return(
      <div>
     	 <Currdate state={props.state}/>
     	 <Events state={props.state}/>
      </div>
      );
  }
export default Footer;