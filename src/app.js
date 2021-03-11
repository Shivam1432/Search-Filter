import React from 'react';
import "./style.css";

import JSONDATA from "./data.json";
import {useState} from 'react';

function App(){
    const [searchTerm,setSearchTerm]=useState('');
    return (
            <>
            <div class="d">
			<input type="text" class="i1" placeholder="Search your Restaurants"
            onChange={event=>{setSearchTerm(event.target.value)}} />
            <br/>
            <br/>
            <div class="d1">
            <table class="t1">
            <thead>
            <td>Name</td>
            <td>Location</td>
            </thead>
            </table>
            </div>
            <table class="t2">
            <div class="div1">
            {JSONDATA.filter((val)=>{
                if(searchTerm ==""){
                    return val
                }
                else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key)=>{
                return (
                    <tr>
                    <td class="td1">{val.Name}</td>
                    <td class="td1">{val.Location}</td>
                    </tr>
                );
            })}
            </div>
            </table>
            </div>
            </>
		)
}
export default App;
