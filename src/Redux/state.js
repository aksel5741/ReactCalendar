import moment from"moment";
import {rerenderEntireTree} from '../render.js'
import React from 'react'
let m=moment();

let state={
	current_month:moment(m),
	prev_month:moment(m).subtract(1,'M').format("MMM"),
	next_month:moment(m).add(1,'M').format("MMM"),
	days:[],
	week_or_Month:'month',
	month:moment(m).format("MMMM"),
	to_do_list:[{
		date: "2.6.2019",
		event: [{
			name: "HOME",
			body: "BUY MILK",
			time: "12:00"
		}]
	},
	{
		date: "25.6.2019",
		event: [{
			name: "JOB",
			body: "CALL SMITH",
			time: "8:00"
		}]
	},
	{
		date: "20.6.2019",
		event: [{
			name: "HOME",
			body: "COOK CAKE",
			time: "13:00"
		}]
	}
	],
	events:[],
	curr_date:null,
	show_this:0

}

export const How_many=()=>{
	if(state.week_or_Month==='month'){
		let k=moment(state.current_month);
		k.startOf('month').format('d');
		let buf=moment(k);
		for (var i=0; i<7; i++) {
			if(i<k.format('d')){state.days.push(undefined);}
			else {
				for (var q = 1; buf.format('MMM')!==state.next_month; q++) {
					state.days.push(q);
					buf.add(1,'d');
				}
				return;
			}
		}
	}
	else{
		let buf2=moment(state.current_month);
		buf2.day(0);
		let buf=moment(buf2);
		buf.add(7,'d');
		while(buf2.format('D')!==buf.format('D')){
			state.days.push(Number(buf2.format('D')));
			buf2.add(1,'d');
		}
	}
}

export const Change =(props)=>{
	state.week_or_Month=props;
	state.current_month=moment(m);
	state.prev_month=moment(m).subtract(1,'M').format("MMM");
	state.next_month=moment(m).add(1,'M').format("MMM");
	Change_prev_next(props);
	state.days=[];	
	rerenderEntireTree(state);
}
const Change_prev_next=(props)=>{
	if(props==='month'){
		state.month=moment(state.current_month).format("MMMM");
		state.prev_month=moment(state.current_month).subtract(1,'M').format("MMM");
		state.next_month=moment(state.current_month).add(1,'M').format("MMM");
		state.events=[];
		state.Show_t=0;
		state.curr_date=null;
	}
	else{
		let buf=moment(state.current_month);
		state.month=moment(state.current_month).format("MMMM")+" "+buf.day(0).format("D")+"-"+buf.add(6,'d').format("D");
		state.prev_month='PREV';
		state.next_month='NEXT';
		state.events=[];
		state.Show_t=0;
		state.curr_date=null;
	}
}

export const Prev_month=()=>{
	if(state.prev_month==='PREV'){
		state.current_month=state.current_month.subtract(7,'d');
		let buf=moment(state.current_month);
		state.month=moment(state.current_month).format("MMMM")+" "+buf.day(0).format("D")+"-"+buf.add(6,'d').format("D");;
	}
	else
		{state.current_month=state.current_month.subtract(1,'M');
	state.month=moment(state.current_month).format("MMMM");
	state.prev_month=moment(state.current_month).subtract(1,'M').format("MMM");
	state.next_month=moment(state.current_month).add(1,'M').format("MMM");
}
state.events=[];
state.curr_date=null;
state.days=[];
state.Show_t=0;
rerenderEntireTree(state);
}
export const Next_month=()=>{
	if(state.next_month==='NEXT'){
		state.current_month=state.current_month.add(7,'d');
		let buf=moment(state.current_month);
		state.month=moment(state.current_month).format("MMMM")+" "+buf.day(0).format("D")+"-"+buf.add(6,'d').format("D");;
	}
	else{
		state.current_month=state.current_month.add(1,'M');
		state.month=moment(state.current_month).format("MMMM");
		state.next_month=moment(state.current_month).add(1,'M').format("MMM");
		state.prev_month=moment(state.current_month).subtract(1,'M').format("MMM");
		
	}
	state.events=[];
	state.Show_t=0;
	state.curr_date=null;
	state.days=[];
	rerenderEntireTree(state);
}
export const Red_bull=()=>{

	let days=state.days.map(
		(day,index)=>{
			if(day===undefined){
				return <div  key={index}></div>
			}
			else{
				if(index === 0 || index === 6 || index === 7 || index === 13 || index === 14 || index === 20 || index === 21 || index === 27 || index === 28 || index === 34 || index === 35){
					
					if(Number(state.current_month.format('D'))===day && state.current_month.format("YYYY-MM-DD")===m.format("YYYY-MM-DD")){
						for( var i=0;i<state.to_do_list.length;i++){
							if(state.current_month.format(day+'M.YYYY')===state.to_do_list[i].date){
								return <div className='event_day' key={index} style={{color:"#FFFFFF"}} onClick={()=>{Do_list(i)}}><b>&bull;</b>{day}</div>;
							}
						}return <div style={{color:"red"}} key={index}><b>&bull;</b>{day}</div>
					}
					else {for(i=0;i<state.to_do_list.length;i++){
						if(state.current_month.format(day+'.M.YYYY')===state.to_do_list[i].date){
							return <div className='event_day'key={index} style={{color:"#FFFFFF"}} onClick={()=>{Do_list(i)}}>{day}</div>
						}	
					}return <div style={{color:"red"}} key={index}>{day}</div>
			}
		}
	else{
		if(Number(state.current_month.format('D'))===day && state.current_month.format("YYYY-MM-DD")===m.format("YYYY-MM-DD")){
			for(i=0;i<state.to_do_list.length;i++){
							if(state.current_month.format(day+'.M.YYYY')===state.to_do_list[i].date){
								return <div className='event_day' style={{color:"#FFFFFF"}} key={index} onClick={()=>{Do_list(i)}}><b>&bull;</b>{day}</div>
							}
						}return <div  key={index}><b>&bull;</b>{day}</div>
		}
		else {
			for( i=0;i<state.to_do_list.length;i++){
							if(state.current_month.format(day+'.M.YYYY')===state.to_do_list[i].date){
								return <div className='event_day' style={{color:"#FFFFFF"}} key={index} onClick={()=>{Do_list(i)}}>{day}</div>
							}
						}return <div  key={index}>{day}</div>
			}
	}
}
})
	return days;
}

export const Do_list=(props)=>{
	if(state.events.length!==0)state.events=[];
	state.events.push(state.to_do_list[props]);
	let buf=moment(state.events[0].date,"DD.MM.YYYY");
	state.curr_date=buf.format('dddd')+', '+buf.format('D')+' '+buf.format('MMMM');
	state.days=[];	
	state.Show_t=0;
	rerenderEntireTree(state);
}

export const Show_t=()=>{
	if(state.Show_t===1)state.Show_t=0;
	else state.Show_t=1;
	state.days=[];	
	rerenderEntireTree(state);
}

export default state;

