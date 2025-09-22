import { useState } from "react";

function SimpleCalculator() {
    const [value, setValue] = useState(0);

    return (
        <div id="calculator-container">
            <h2>Calculadora</h2>
            <p>Esta es una calculadora simple</p>
            <p id="calc-value">Valor actual: {value}</p>
            <div id="calc-buttons">
                <button onClick={() => setValue(value + 1)}>Aumentar</button>
                <button onClick={() => setValue(value - 1)}>Reducir</button>
                <button onClick={() => setValue(value * 2)}>Multiplicar por 2</button>
                <button onClick={() => setValue(value / 3)}>Dividir por 3</button>
                <button onClick={() => setValue(0)}>Resetear</button>
            </div>
        </div>
    );
}

export default SimpleCalculator;