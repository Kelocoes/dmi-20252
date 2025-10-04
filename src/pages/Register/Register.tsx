import React, { useRef } from "react";
import { useNavigate } from "react-router";

export default function Register() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            localStorage.setItem("user", formData.get("username") as string);
            nav("/login");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form ref={formRef} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleSubmit}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Username</label>
                            <input type="text" className="input" placeholder="Username" name="username" required />
                            <label className="label">Full name</label>
                            <input type="text" className="input" placeholder="FullName" name="fullName" required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" required />
                            <button className="btn btn-neutral mt-4" type="submit">
                                Sign Up
                            </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
}
