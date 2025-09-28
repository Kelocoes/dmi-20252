import { useState } from "react";

export default function Counter() {
    console.log('Me estoy actualizando!')
    const [counter, setCounter] = useState(0);
    console.log('El valor del counter es:', counter)
    const isEven = counter % 2 === 0 ? "Sí" : "No"

    function increaseCounter() {
        setCounter(prev => prev + 1);
    }

    return (
        <div id="counter">
            <button className="btn btn-primary" onClick={increaseCounter}>
                Aumentar el contador!
            </button>
            <p>El contador está en: {counter}</p>
            <p>El valor es par? {isEven}</p>
        </div>
    );
}