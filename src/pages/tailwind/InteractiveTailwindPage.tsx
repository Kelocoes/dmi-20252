import { useState } from "react";

export default function InteractiveTailwindPage() {
    const [bgColor, setBgColor] = useState("bg-orange-200");
    const [textSize, setTextSize] = useState("text-base");

    return (
        <div
            id="interactive-tailwind-page"
            className="p-8 bg-gray-50 min-h-screen"
        >
            <h1 className="text-4xl font-extrabold text-blue-700 mb-6 underline">
                Interactive Tailwind CSS Page
            </h1>
            <div className={`${bgColor} ${textSize} p-4 text-center transition-all duration-300`}>
                Cambia el color de fondo y el tamaño del texto usando los botones de abajo.
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
                <button
                    className="px-4 py-2 bg-orange-200 rounded hover:bg-orange-300"
                    onClick={() => setBgColor("bg-orange-200")}
                >
                    Fondo naranja claro
                </button>
                <button
                    className="px-4 py-2 bg-orange-400 rounded hover:bg-orange-500 text-white"
                    onClick={() => setBgColor("bg-orange-400")}
                >
                    Fondo naranja medio
                </button>
                <button
                    className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 text-white"
                    onClick={() => setBgColor("bg-orange-600")}
                >
                    Fondo naranja oscuro
                </button>
                <button
                    className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300"
                    onClick={() => setBgColor("bg-blue-200")}
                >
                    Fondo azul claro
                </button>
            </div>
            <div className="mt-4 flex gap-4 flex-wrap">
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setTextSize("text-base")}
                >
                    Texto normal
                </button>
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setTextSize("text-xl")}
                >
                    Texto grande
                </button>
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                    onClick={() => setTextSize("text-3xl")}
                >
                    Texto muy grande
                </button>
            </div>
        </div>
    );
}