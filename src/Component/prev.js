import React from 'react'
import '../App.css';

const Prev=(props)=>{	
	
	const Sub_month=()=>{
		props.sub();
	}
		return(
			<div className='prev'>
             <p onClick={Sub_month}>
             	{props.state}
             </p>
             </div>
			)
	}

export default Prev;