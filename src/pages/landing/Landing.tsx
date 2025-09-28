import { Link } from "react-router";

export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold mb-6">Bienvenido a JugandoAndo</h1>
            <p className="text-xl mb-4">Tu puerta de entrada a juegos de mesa</p>
            <Link to="/login" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md">
                Iniciar sesión
            </Link>
            <Link to="/register" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md">
                Registrarse
            </Link>
        </div>
    );
}
