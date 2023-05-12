
import React, { useState } from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Work4(){

    
    const [name1,stepup]=useState(0)
    

const u=()=>{
    stepup(name1+1)
}
const d=()=>{
    stepup(name1-1)
}

return (
<div>
           
           <div >
            
              <div className=" justify-content-around pt-5">
                 <div className='d-flex justify-content-center'><h1>{name1}</h1></div>
                   <div className='d-flex justify-content-center'>
                      <button className='btn btn-outline-primary   p-2 fs-5' onClick={d}>MINUS</button>
                      <button  className='btn btn-outline-primary   p-2 fs-5' onClick={u}>PLUS</button>
                   </div>
              </div>
           </div>


</div>

)

}



