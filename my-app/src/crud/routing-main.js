import React, { useState } from 'react';
import Routing1 from './routing1';

export default function Routingmain(){
  
    const [name1,]=useState('')
   
   
    
    return (<div>
        <div className=" container d-flex justify-content-center">
         <div className=" pt-5 justify-content-around">
        
        <button onClick={Routing1} className='bg-primary rounded-pill'>CONTACT</button>
        <button onClick={Routing1} className='rounded-pill'>VIEW</button>
         </div>
        
        </div>
        
        </div>
    )   

}
