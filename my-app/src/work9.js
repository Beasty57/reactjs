import React, { useState } from 'react';

export default function  Work9() {
    const [bgColor, setBgColor] = useState("#FFFFFF");
  
    const handleClickColor1 = () => {
      setBgColor("#FF0000");
      document.body.style.backgroundColor = "#FF0000"; // Update body background color
    };
  
    const handleClickColor2 = () => {
      setBgColor("#00FF00");
      document.body.style.backgroundColor = "#00FF00"; // Update body background color
    };
  
    return (
        <div>
            <div>
        <button class="btn btn-outline-secondary" onClick={handleClickColor1}>Red Background</button>
        <button class="btn btn-outline-secondary" onClick={handleClickColor2}>Green Background</button>
      </div>
      
        </div>
      
    );
  }