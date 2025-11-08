import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router";

export default function ForgotPassword() {
    const formRef = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        const formData = new FormData(formRef.current!);
        const email = formData.get("email") as string;

        setLoading(false);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Recuperar Contraseña</h1>
                    <p className="py-6">Ingresa tu email para recibir un enlace de recuperación</p>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} ref={formRef}>
                        {message && (
                            <div className="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{message}</span>
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email@ejemplo.com" className="input input-bordered" name="email" required disabled={loading} />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Enviar enlace de recuperación"}
                            </button>
                        </div>

                        <div className="divider">O</div>

                        <p className="text-center">
                            ¿Recordaste tu contraseña?{" "}
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
