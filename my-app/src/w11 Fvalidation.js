import { useState } from "react"

export default function Fvalid(){
   
       const [name1,setname]=useState('')
          
       const san =(e)=>{
        e.preventDefault()
        console.log(name1);
        setname('')
       }
      

    return(
        <>
        
        <form onSubmit={san}>
            <input type='text' onChange={(e)=>setname(e.target.value)} value={name1} />
            <input  type='submit'/>
        </form>

        </>
        )
}