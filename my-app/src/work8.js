import React, { useState } from 'react';

export default function Work8() {


  const [bgColor, setBgColor] = useState("#FFFFFF");

  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
    document.body.style.backgroundColor = randomColor; // Update body background color
  };

  return (
    <div>
         <div>
      <button class="btn btn-outline-secondary" onClick={handleClick}>Change Background</button>
    </div>
    
    </div>
   
  );
}