import React from "react";
import '../App.css';

const this_week=(props)=>{
	const Week=()=>{
		props.change('week');
	}
    return(
      <div className='this_1' onClick={Week}>
       <p>This week</p>
      </div>
      );
}

export default this_week;