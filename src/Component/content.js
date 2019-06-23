import React from "react";
import '../App.css';
import Days from './days.js';

const Content=(props)=>{
    
    return(
      <div >
        <section>
        	<div className='conteiner'>
        		<Days hmany={props.hmany} arr_day={props.arr_day} redbull={props.redbull}/>
             </div>
        </section>
      </div>
      );
}

export default Content;