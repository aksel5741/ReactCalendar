import React from "react";
import '../App.css';

const Curr_date=(props)=>{
		let Some=props.state.curr_date;
 return(
      <div className='curr'>
       <div className='curr_day'>{Some}</div>
       </div>
      );
}
export default Curr_date;