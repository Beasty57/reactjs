
import React, { useState } from 'react';


import img1 from "./files/yy.jpg";
import img2 from "./files/rrr.jpg";


export default function Work5(){
 

    const [name1,stepup]=useState()
const u=()=>{
    stepup(<img src={img2} className='w-50 h-50' ></img>)
}
const d=()=>{
    stepup(<img src={img1}className='w-25 h-25'></img>)
}



return (
<div>
            
      <div>
           <div className="  pt-5">

                <div className='d-flex justify-content-center'>{name1}</div>

               <div className='d-flex justify-content-center'>
                  <button className='btn btn-outline-primary   p-2 fs-5' onClick={d}>MOBILE</button>
                  <button  className='btn btn-outline-primary   p-2 fs-5' onClick={u}>TV</button>
              </div>
           </div>
       </div>
   
</div>

)

}




