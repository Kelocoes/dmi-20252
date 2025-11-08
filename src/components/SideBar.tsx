import React from "react";
import { Link } from "react-router";

import authService from "../services/supabase/authService";

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
    const menuItems = [
        { name: "Feed", link: "/feed" },
        { name: "Profile", link: "/feed/profile" },
    ];

    const handleLogout = () => {
        console.info("Logout clicked");
        authService.signOut().then((result) => {
            if (result.success) {
                console.info("User signed out successfully");
                // Aquí puedes redirigir al usuario o actualizar el estado de la aplicación
            } else {
                console.error("Sign-out failed:", result.error);
                // Aquí puedes mostrar un mensaje de error al usuario
            }
        });
    };

    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{children}</div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-60 p-4 flex flex-col">
                    <div className="flex-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </div>
                    <li className="mt-auto">
                        <button onClick={handleLogout} className="btn btn-error">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
