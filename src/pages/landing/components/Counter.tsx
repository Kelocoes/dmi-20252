import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Contador</h2>
            <p>Valor actual: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
        </div>
    );
}

export default Counter;