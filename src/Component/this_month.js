import React from "react";
import '../App.css';

const this_month=(props)=>{
	const Week=()=>{
		props.change('month');
	}
    return(
      <div className='this_1' onClick={Week}>
       <p>This month</p>
      </div>
      );
}

export default this_month;