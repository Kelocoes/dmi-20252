import { useState } from "react";

export default function PropsCommunication({ fn }: { fn: (_name: string) => void }) {
    const [input, setInput] = useState("");

    return (
        <div id="props-communication">
            <h2>Comunicación entre componentes con Props</h2>
            <p>Este componente busca usar funciones pasadas por el componente padre</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu nombre"
            />
            <button onClick={() => fn(input)}>Enviar al padre</button>
        </div>
    );
}
