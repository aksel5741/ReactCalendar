import React from "react";
import '../App.css';

const arrow=(props)=>{
	const Show=()=>{
		props.Show();
	}
 return(
      <div className='arrow' onClick={Show}>
       <p >Λ</p>
       </div>
      );
}
export default arrow;