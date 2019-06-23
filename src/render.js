import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Prev_month}from'./Redux/state.js';
import {Next_month}from'./Redux/state.js';
import {How_many}from './Redux/state.js';
import {Change} from './Redux/state.js';
import {Red_bull}from './Redux/state.js';
import {Show_t}from './Redux/state.js';
export const rerenderEntireTree=(state)=>{
	ReactDOM.render(<App state={state} prev_month={Prev_month} next_month={Next_month} 
					 	 hmany={How_many}
					 	 change={Change}
					 	 redbull={Red_bull}
					 	 Show={Show_t}
		/>, document.getElementById('root'));
}
 


