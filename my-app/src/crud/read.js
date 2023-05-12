import React, { useState,useEffect } from 'react';
import {API} from "./api";
import axios from "axios";

export default function Read(){
    const [name,setName]=useState([]);
   useEffect(()=>{ 
    axios.get(API).then((dq)=>{
        setName(dq.data);
    })
   },[])
 
  const del =(b)=>{
    axios.delete(`${API}/${b}`).then(()=>{
    axios.get( API).then((dq)=>{
        setName(dq.data);
    })  
    })
  }
   

    return (
        <div className=" container ">
            <div>
                <table   className='table table-bordered'>
                    {name.map((t)=>(
                        <tr>
                            <td> {t.name}</td>
                            <td> {t.password}</td>
                            <td> {t.age}</td>
                            <td><button  onClick={() =>del(t.id)}>del</button></td>
                        </tr>

                    ))}
                </table>
            </div>
        </div>
        
    )   

}
