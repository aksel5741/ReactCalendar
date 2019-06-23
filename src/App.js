import React from "react";
import './App.css';
import Head from './Component/head';
import WDays from './Component/weekdays';
import Content from './Component/content';
import Footer from './Component/Footer.js';
import Thiswm from './Component/this_w_m.js'


const App=(props)=>{
	const Show=()=>{
		if(props.state.Show_t===1)return <Thiswm change={props.change}/>;
		else return <WDays state={props.state.Show_t}/>
	}
 return(
    <div >
        <Head state={props.state} prev_month={props.prev_month} next_month={props.next_month} 
        change={props.change}
        Show={props.Show}/>
        {Show()}
        <Content arr_day={props.state} hmany={props.hmany} redbull={props.redbull}/>
        <Footer state={props.state} />
    </div>
          
    );
}

export default App;