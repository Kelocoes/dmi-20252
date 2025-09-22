import { useState } from "react";

function Button() {
    // Instrucciones de JS
    const [isUserActive, setIsUserActive] = useState(false);

    function changeState() {
        console.info("Estoy dandole click");
        setIsUserActive(prev => !prev);
        console.info(isUserActive); 
    }

    return (
        <button
            style={{
                backgroundColor: isUserActive ? "green" : "red"
            }}
            onClick={changeState}
        >
            {isUserActive ? "El usuario está activado" : "El usuario no está activado"}
        </button>
    );
}

export default Button;