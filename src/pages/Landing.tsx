import { Link } from "react-router";

export default function Landing() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Página de inicio</h1>
                    <p className="py-6">Bienvenido a nuestra aplicación. Por favor, inicia sesión o regístrate para continuar.</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/sign-in" className="btn btn-primary">
                            Iniciar Sesión
                        </Link>
                        <Link to="/register" className="btn btn-secondary">
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
