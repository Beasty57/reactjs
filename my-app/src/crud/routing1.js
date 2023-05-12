import React, { useState } from 'react';
import axios from "axios";
import {API} from "./api"
import './routing.css'

export default function Routing1(){
  
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
    return (<div>
    
        
        <div className=" container-sm  col-6 ">
    
       <div className=" pt-5 justify-content-around">
            <h1>CONTACT</h1>    

            <form onSubmit={san}>
                <lable classname='d-flex  bg-primary '>FIRST NAME</lable><br></br>
            
                <input class="awsome_input "  placeholder="enter name" type='text' onChange={(e)=>Fsetname(e.target.value)} value={fname} />
                <span class="awsome_input_border"/>
            </form>

            <form onSubmit={san}>
                <lable classname='d-flex border-0'>LAST NAME</lable><br></br>
            
                <input class="awsome_input"  type='text' onChange={(e)=>Lsetname(e.target.value)} value={lname} />
                <span class="awsome_input_border"/>
            </form>

            <form onSubmit={san}> 
                <lable classname='d-flex '>E-MAIL</lable><br></br>
          
                <input class="awsome_input"  placeholder="What do you think?" type='email' onChange={(e)=>setname2(e.target.value)} value={name2} />
                <span class="awsome_input_border"/>
            </form>
        
            <form onSubmit={san}>
                <lable classname='d-flex    '>PASSWORD</lable><br></br>
                
                    <input type="text" class="awsome_input"  placeholder="What do you think?" onChange={(e)=>setname3(e.target.value)} value={name3}/>
                    <span class="awsome_input_border"/>
                
                <input className="btn btn-warning" type='submit'/>
         
         </form>

    </div>

    
        </div>
 
        </div>
    )   

}
