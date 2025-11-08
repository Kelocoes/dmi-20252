import { useRef, type FormEvent } from "react";
import { Link } from "react-router";

import authService from "../services/supabase/authService";

export default function Register() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        const dataObj = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            birthdate: formData.get("birthdate"),
            bio: formData.get("bio"),
        };
        console.info("Form Data:", dataObj);
        const result = await authService.signUp(dataObj.email as string, dataObj.password as string, {
            username: dataObj.username as string,
            birthdate: dataObj.birthdate as string,
            bio: dataObj.bio as string,
        });

        if (result.success) {
            console.info("User registered successfully:", result);
            // Aquí podrías redirigir al usuario, mostrar un mensaje de éxito y
            // también guardar la información adicional en tu base de datos si es necesario
        } else {
            console.error("Registration failed:", result);
            // Aquí podrías mostrar un mensaje de error al usuario
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
                                <span className="label-text">Fecha de nacimiento</span>
                            </label>
                            <input type="date" name="birthdate" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Biografía</span>
                            </label>
                            <textarea name="bio" placeholder="Cuéntanos algo sobre ti..." className="textarea textarea-bordered h-24" />
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
