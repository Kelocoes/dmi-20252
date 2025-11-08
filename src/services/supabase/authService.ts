import { supabase } from "./config";

const authService = {
    signUp: async (email: string, password: string, metadata?: { username?: string; birthdate?: string; bio?: string }) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: metadata, // Información adicional del usuario si desean agregarla
                },
            });

            if (error) {
                console.error("Error signing up:", error);
                return {
                    success: false,
                    error: error.message,
                    user: null,
                };
            }

            if (data.user && !data.session) {
                return {
                    success: false,
                    error: "Este email ya está registrado. Por favor, verifica tu correo o inicia sesión.",
                    user: null,
                    alreadyRegistered: true,
                };
            }

            return {
                success: true,
                user: data.user,
                session: data.session,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al registrar usuario",
                user: null,
            };
        }
    },

    signIn: async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error("Error signing in:", error);
                return {
                    success: false,
                    error: error.message,
                    user: null,
                };
            }

            return {
                success: true,
                user: data.user,
                session: data.session,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al iniciar sesión",
                user: null,
            };
        }
    },

    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                console.error("Error signing out:", error);
                return {
                    success: false,
                    error: error.message,
                };
            }

            return {
                success: true,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al cerrar sesión",
            };
        }
    },

    getCurrentUser: async () => {
        try {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            return user;
        } catch (error) {
            console.error("Error getting current user:", error);
            return null;
        }
    },

    getSession: async () => {
        try {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            return session;
        } catch (error) {
            console.error("Error getting session:", error);
            return null;
        }
    },

    forgotPassword: async (email: string) => {
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin +"/update-password",
            });

            if (error) {
                console.error("Error sending password reset email:", error);
                return {
                    success: false,
                    error: error.message,
                    data: data,
                };
            }

            return {
                success: true,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al enviar el correo de restablecimiento de contraseña",
            };
        }
    },

    handlePasswordReset: async (newPassword: string) => {
        try {
            const { data, error } = await supabase.auth.updateUser({
                password: newPassword,
            });

            if (error) {
                console.error("Error resetting password:", error);
                return {
                    success: false,
                    error: error.message,
                };
            }

            return {
                success: true,
                user: data.user,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al restablecer la contraseña",
            };
        }
    },

    setSession: async (accessToken: string, refreshToken: string) => {
        try {
            const { error } = await supabase.auth.setSession({
                access_token: accessToken,
                refresh_token: refreshToken,
            });

            if (error) {
                console.error("Error setting session:", error);
                return {
                    success: false,
                    error: error.message,
                };
            }

            return {
                success: true,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al establecer la sesión",
            };
        }
    },
};

export default authService;
