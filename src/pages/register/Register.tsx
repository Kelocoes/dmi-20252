import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../layout/Auth/Auth";

export default function Register() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            const email = formData.get("email");
            const password = formData.get("password");
            const username = formData.get("username");
            console.info(email, password, username);
            /* Lógica de verificación de la contraseña y registro*/
            register(username as string, email as string, password as string);
            navigate("/feed");
        }
    };

    return (
        <Box id="register-page" className="flex flex-col items-center gap-4 justify-center min-h-screen">
            <Typography variant="h3">Registro</Typography>
            <form ref={formRef} className="flex flex-col gap-4 min-w-72" onSubmit={handleSubmit}>
                <TextField type="email" name="email" required label="Correo electrónico" />
                <TextField type="text" name="username" required label="Nombre de usuario" />
                <TextField type="password" name="password" required label="Contraseña" />
                <Button type="submit" variant="contained">
                    Registrarse
                </Button>
            </form>
        </Box>
    );
}
