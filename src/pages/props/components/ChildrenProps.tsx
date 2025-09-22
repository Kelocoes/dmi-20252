export default function ChildrenProps({ children }: { children: React.ReactNode }) {
    return (
        <div id ="children-props">
            <h2>Props Children</h2>
            <p>Este componente utiliza la prop especial "children" para renderizar contenido pasado desde su componente padre.</p>
            <div className="children-content" style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
                {children}
            </div>
        </div>
    );
}