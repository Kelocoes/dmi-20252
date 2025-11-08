export default function Cell({ color, onClick, size = 25, letter }: { color: string; onClick: () => void; size?: number; letter: string }) {
    return (
        <div
            style={{ backgroundColor: color, width: size, height: size }}
            onClick={onClick}
            className=""
        >
            {letter}
        </div>
    );
}
