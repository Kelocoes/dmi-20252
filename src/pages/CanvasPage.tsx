import Canvas from "../components/Canvas";

export default function CanvasPage() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4 min-h-screen min-w-fit">
                    <h1 className="text-5xl font-bold">Canvas Page</h1>
                    <p className="py-6">Aquí puedes crear y editar tus diseños</p>
                    <Canvas />
                </div>
            </div>
        </div>
    );
}
