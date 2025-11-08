import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

import authService from "../services/supabase/authService";

export default function UpdatePassword() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [sessionReady, setSessionReady] = useState(false);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        const type = hashParams.get("type");

        if (type === "recovery" && accessToken) {
            authService.setSession(accessToken, "").then((result) => {
                if (result.success) {
                    setSessionReady(true);
                } else {
                    setError("Enlace inválido o expirado");
                }
            });
        }
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(formRef.current!);
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            setLoading(false);
            return;
        }

        const result = await authService.handlePasswordReset(password);

        if (result.success) {
            alert("Contraseña actualizada exitosamente");
            navigate("/sign-in");
        } else {
            setError(result.error || "Error al actualizar la contraseña");
        }

        setLoading(false);
    };

    if (!sessionReady && !error) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4">Verificando enlace...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Nueva Contraseña</h1>
                    <p className="py-6">Ingresa tu nueva contraseña</p>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} ref={formRef}>
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
                                <span className="label-text">Nueva Contraseña</span>
                            </label>
                            <input type="password" placeholder="••••••••" className="input input-bordered" name="password" required disabled={loading || !sessionReady} minLength={6} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirmar Contraseña</span>
                            </label>
                            <input type="password" placeholder="••••••••" className="input input-bordered" name="confirmPassword" required disabled={loading || !sessionReady} minLength={6} />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary" disabled={loading || !sessionReady}>
                                {loading ? <span className="loading loading-spinner"></span> : "Actualizar Contraseña"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
