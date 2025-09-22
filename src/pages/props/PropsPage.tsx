import ChildrenProps from "./components/ChildrenProps";
import PropsCard from "./components/PropsCard";
import PropsCommunication from "./components/PropsCommunication";
import SimpleComponent from "./components/SimpleComponent";

export default function PropsPage() {
    const callbackFunction = (message: string) => {
        alert(`Mensaje desde el componente hijo usando una función del padre: ${message}`);
    };

    return (
        <div id="props-page-container">
            <h1>Página de Props</h1>
            <p>
                Esta página será utilizada para hacer experimentos con props en
                React
            </p>
            <SimpleComponent name="Juan" age={30} />
            <PropsCard
                title="Primera Tarjeta"
                name="Tarjeta 1"
                description="Esta es la primera tarjeta"
                count={1}
            />
            <PropsCard
                title="Segunda Tarjeta"
                name="Tarjeta 2"
                description="Esta es la segunda tarjeta"
                count={2}
                extraInfo={{ info: "Información extra" }}
            />
            <PropsCommunication fn={callbackFunction} />
            <ChildrenProps>
                <p>Este es un contenido pasado como children al componente.</p>
                <button onClick={() => alert("Botón dentro de Children Props")}>
                    Haz clic aquí
                </button>
            </ChildrenProps>
        </div>
    );
}
