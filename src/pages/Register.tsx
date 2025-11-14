import { useRef, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import authService from "../services/supabase/authService";

export default function Register() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        const dataObj = {
            username: formData.get("username") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            letter: (formData.get("letter") as string)[0],
            color: formData.get("color") as string,
        };
        console.info("Form Data:", dataObj);

        try {
            const result = await authService.signUp(dataObj.email as string, dataObj.password as string, dataObj);

            if (result.success) {
                console.info("User registered successfully:", result);
                navigate("/sign-in");
            } else {
                console.error("Registration failed:", result.error);
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200 py-8">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Registro</h1>
                    <p className="py-6">Crea tu cuenta para comenzar</p>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} ref={formRef}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre de usuario</span>
                            </label>
                            <input type="text" name="username" placeholder="usuario123" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email@ejemplo.com" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contraseña</span>
                            </label>
                            <input type="password" name="password" placeholder="••••••••" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Letter</span>
                            </label>
                            <input type="text" name="letter" className="input input-bordered" required maxLength={1} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Color</span>
                            </label>
                            <input type="color" name="color" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Registrarse
                            </button>
                        </div>

                        <div className="divider">O</div>
                        <p className="text-center">
                            ¿Ya tienes cuenta?{" "}
                            <Link to="/sign-in" className="link link-primary">
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
