import React from "react";
import './BotonSuma.css';
import { useState } from "react";

function BotonSuma({text, onClick}) {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
    setIsActive(true);

    // Desactivar después de un tiempo (por ejemplo, 200ms)
    setTimeout(() => {
      setIsActive(false);
    }, 200);

    onClick(); 
  };

    return (
        <button className={`botonSuma ${isActive ? 'botonSuma-activo' : ''}`}  onClick={handleButtonClick}>
            {text}
        </button>
    
    )
}

export default BotonSuma;