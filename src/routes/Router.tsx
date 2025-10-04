import { createBrowserRouter } from "react-router";

import Landing from "../pages/Landing/Landing";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Catalog from "../pages/Catalog/Catalog";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "catalog",
                    element: <Catalog />,
                },
            ],
        },
    ],
    { basename: "/dmi" }
);

export default router;
