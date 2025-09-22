import { useState } from "react";

function AdvancedCalculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div id="advance-calculator-container">
            <h2>Calculadora Avanzada</h2>
            <p>Esta es una calculadora avanzada que permite recibir datos de entrada y realizar operaciones matemáticas</p>
            <div id="advance-calc-inputs">
                <input 
                    type="number" 
                    id="advance-calc-input1" 
                    placeholder="Número 1" 
                    value={input1} 
                    onChange={(e) => setInput1(Number(e.target.value))} 
                />
                <input 
                    type="number" 
                    id="advance-calc-input2" 
                    placeholder="Número 2" 
                    value={input2} 
                    onChange={(e) => setInput2(Number(e.target.value))} 
                />
                <p id="advance-calc-result">Resultado: {result}</p>
            </div>
            <div id="advance-calc-buttons">
                <button onClick={() => setResult(input1 + input2)}>Sumar</button>
                <button onClick={() => setResult(input1 - input2)}>Restar</button>
                <button onClick={() => setResult(input1 * input2)}>Multiplicar</button>
                <button onClick={() => setResult(input1 / input2)}>Dividir</button>
            </div>
        </div>
    );
}

export default AdvancedCalculator;