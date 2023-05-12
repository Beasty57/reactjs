import React, { useState } from 'react';
import axios from "axios";
import {API} from "./api"
import './routing.css'

export default function Testing(){
  
    const [fname,Fsetname]=useState('')
    const [lname,Lsetname]=useState('')
    const [name2,setname2]=useState('')
    const [name3,setname3]=useState('')
    
    const san =(e)=>{
     e.preventDefault()
     axios.post(API,{
        firstname:fname,Lastname:lname, password:name2, age:name3
     })

    //  console.log(name1);
    //  console.log(name2);
    //  console.log(name3);
     Fsetname('')
     Lsetname('')
     setname2('')
     setname3('')
    }
    return (<div classname=' bg-primary container '>
    
        
    
   
  

      <form class="form-container" onSubmit={san}>
             
                <input class="awsome_input "  for="inputField"   type="text" placeholder='placeholder' id="inputField" required onChange={(e)=>Fsetname(e.target.value)} value={fname} />
                <span class="awsome_input_border"/>
                <label for="inputField">Enter text</label>
            </form>
            <div class="form-container">
    <input type="text" id="inputField" required/>
    <label for="inputField">Enter text</label>
  </div>
        </div>
    )   

}
