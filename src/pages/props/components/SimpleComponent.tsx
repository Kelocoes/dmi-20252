export default function SimpleComponent({ name, age }: { name: string; age: number }) {
    return (
        <div>
            <h2>Componente Simple</h2>
            <p>Este es un componente React simple.</p>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
        </div>
    );
}