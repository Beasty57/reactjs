// import logo from './a.mp4';
// import './App.css';
// import song from './as.mp3';

// export default function App() {
//   return (
    // <div className="App">
    //  <h1>hii</h1>
    //  <img src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg'></img>
    //  <video src={logo}  width='300px'  autoPlay='' loop='  '> </video>

    // <audio src={song} controls></audio>
    

    // </div>
//   );
// }
// export default App;



   {/* function B(){
    return(
        <div>
<h1>haii iam b</h1>
        </div>
    )
}
export default B; */}



// import B from "./b";

//  export default function App(){
// let a ='prasanth';

// let array =[1,2,3,4,5,6]


// return (
//  <div>

//     <h1>hello boobathy</h1>
//     <p>lorem</p>
//     <h1>{a}</h1>

//     <h1>[{[ array]}]</h1>

//     <h1>{'  qwertyuio'}</h1>

//     <B></B>
//  </div>
 
// )

//  }



// use statement
import React, { useState } from 'react';

 export default function App(){
 
    const [name1,setName]=useState("prasanth")

        const h=()=>{
            setName("dhamu")
        }

 return (
 <div>
 
<Work1></Work1>

<h1>{name1}</h1>
<button onClick={h}></button>

 </div>
)}