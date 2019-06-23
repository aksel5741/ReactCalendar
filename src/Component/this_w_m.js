import React from "react";
import '../App.css';
import Thisweek from './this_week.js'
import Thismonth from './this_month.js'


const this_w_m=(props)=>{
    return(
      <div  className='this'>
       <Thisweek change={props.change} />
       <Thismonth change={props.change} />
      </div>
      );
}

export default this_w_m;