export default function Cell({ color, onClick, size=50 }: { color: string; onClick: () => void; size?: number }) {
    return <div style={{ backgroundColor: color, width: size, height: size }} onClick={onClick}>Cell Component</div>;
}
