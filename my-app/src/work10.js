import React, { useState } from 'react';


export default function Work10() {
    const [bgImage, setBgImage] = useState("");

  const handleClickImage1 = () => {
    setBgImage("url('https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80')");
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80')"; // Update body background image
  };

  const handleClickImage2 = () => {
    setBgImage("url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg ')");
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg')"; // Update body background image
  };

  return (
    <div>
      <div style={{backgroundRepeat:"no-repeat" }}>
      <button class="btn btn-outline-secondary" onClick={handleClickImage1} >Image 1 Background</button>
      <button class="btn btn-outline-secondary" onClick={handleClickImage2}>Image 2 Background</button>
      </div>
      
    </div>
  );
}