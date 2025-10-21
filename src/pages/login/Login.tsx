import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { useAuth } from "../../layout/Auth/Auth";
import { loginAxios } from "../../services/authService";
import { changeTheme } from "../../reducers/theme/ThemeReducer";
import { setMessage } from "../../reducers/message/MessageReducer";

export default function Login() {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const dispatch = useDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            const username = formData.get("username") as string;
            const password = formData.get("password") as string;
            // Lógica de verificación de login
            const response = await loginAxios(username, password);
            console.info(response);
            if (response.ok && response.user) {
                setUser(response.user);
                navigate("/feed");
            } else {
                alert(response.message || "Error en el login");
            }
        }
    };

    const handleTheme = () => {
        dispatch(changeTheme());
        dispatch(setMessage("Hola desde el estado global!"));
    };

    return (
        <Box id="login-page" className="flex flex-col items-center gap-4 justify-center min-h-screen">
            <Typography variant="h3">Login</Typography>
            <button className="btn btn-accent" onClick={handleTheme}>
                Cambiar modo
            </button>
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
