interface PropsCardProps {
    [key: string]: unknown;
}

export default function PropsCard(props: PropsCardProps) {
    return (
        <div className="props-card">
            <h2>Componente de Props</h2>
            <p>Este es un componente que recibe props y las muestra en pantalla</p>
            <p>{JSON.stringify(props)}</p>
            {
                Object.keys(props).map((propKey) => (
                    <div key={propKey}>
                        <strong>{propKey}:</strong> {String(props[propKey])}
                    </div>
                ))
            }
        </div>
    );
}