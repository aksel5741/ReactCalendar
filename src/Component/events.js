import React from "react";
import '../App.css';

const Events=(props)=>{
	let show;
	// "<div id=\"practice_today\"> <p id=\"default\">" + to_do_list[i].event[0].name 
	// + "</p><p id=\"time_prac\">" + to_do_list[i].event[0].time + 
	// "</p><p id=\"prac_name\">" + to_do_list[i].event[0].body + "</p></div>"
	if(props.state.events.length!==0){
		show=props.state.events.map(el=>{
			return <div key={el} className="practice_today">
			<p className="default">{el.event[0].name}</p>
			<p className="time_prac">{el.event[0].time}</p>
			<p className="prac_name">{el.event[0].body}</p>
			</div>
		})
	}
	else show= null;
 return(
      <div className='curr'>
       {show}
      </div>
      );
}
export default Events;