import React, { useState } from 'react';
import axios from "axios";
import {API} from "./api"
import Read from "./read"
export default function Creat(){
  
    const [name1,setname]=useState('')
    const [name2,setname2]=useState('')
    const [name3,setname3]=useState('')
    
    const san =(e)=>{
     e.preventDefault()
     axios.post(API,{
        name:name1, password:name2, age:name3
     })

    //  console.log(name1);
    //  console.log(name2);
    //  console.log(name3);
     setname('')
     setname2('')
     setname3('')
    }
    return (<div>
        <div className=" container d-flex justify-content-center">
         <div className=" pt-5 justify-content-around">
         <form onSubmit={san}>
           <lable classname='d-flex justify-content-center fs-2'>NAME</lable><br></br>
            <input classname='' placeholder="enter name" type='text' onChange={(e)=>setname(e.target.value)} value={name1} />
           
        </form>
        <form onSubmit={san}> 
            <lable classname='d-flex justify-content-center fs-2'>E-MAIL</lable><br></br>
            <input placeholder="enter e-mail" type='email' onChange={(e)=>setname2(e.target.value)} value={name2} />
            
        </form>
        <form onSubmit={san}>
            <lable classname='d-flex justify-content-center font-weight-bold'>PASSWORD</lable><br></br>
            <input placeholder="enter password" type='password' onChange={(e)=>setname3(e.target.value)} value={name3} />
            <br></br>
            <input className="btn btn-info" type='submit'/>
        </form>
         </div>
        
        </div>
        <Read></Read>
        </div>
    )   

}
