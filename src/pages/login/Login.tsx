import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../layout/Auth/Auth";
import { login, loginAxios } from "../../services/authService";
import type { User } from "../../types/UserType";

export default function Login() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            const username = formData.get("username") as string;
            const password = formData.get("password") as string;
            console.info(username, password);
            // Lógica de verificación de login
            const data = await loginAxios(username, password);
            if (data.ok) {
                setUser(data.user as User);
                navigate("/feed");
            } else {
                alert("Login failed: " + data.message);
            }
        }
    };

    return (
        <Box id="login-page" className="flex flex-col items-center gap-4 justify-center min-h-screen">
            <Typography variant="h3">Login</Typography>
            <form ref={formRef} className="flex flex-col gap-4 min-w-72" onSubmit={handleSubmit}>
                <TextField type="username" name="username" required label="Nombre de usuario" />
                <TextField type="password" name="password" required label="Contraseña" />
                <Button type="submit" variant="contained">
                    Iniciar sesión
                </Button>
            </form>
        </Box>
    );
}
