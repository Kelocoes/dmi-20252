import { useRef, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import authService from "../services/supabase/authService";
import userService from "../services/supabase/userService";

export default function Login() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        const email = formData.get("email");
        const password = formData.get("password");
        console.info("Email:", email);
        console.info("Password:", password);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Iniciar Sesión</h1>
                    <p className="py-6">Ingresa tus credenciales para acceder</p>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} ref={formRef}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email@ejemplo.com" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contraseña</span>
                            </label>
                            <div className="relative">
                                <input type="password" placeholder="••••••••" className="input input-bordered w-full pr-12" name="password" required />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="divider">O</div>
                        <p className="text-center">
                            ¿No tienes cuenta?{" "}
                            <Link to="/register" className="link link-primary">
                                Regístrate aquí
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
