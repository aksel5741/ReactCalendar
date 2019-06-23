import React from "react";
import '../App.css';

const Next=(props)=>{

const Add_month=()=>{
		props.add();
	}
    return(
    	<div className='next'>
      <p onClick={Add_month}>
        {props.state}
      </p>
      </div>
      );
  
}

export default Next;  