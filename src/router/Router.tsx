import { createBrowserRouter, Navigate } from "react-router";

import Landing from "../pages/landing/Landing";
import Register from "../pages/register/Register";
import AuthLayout from "../layout/Auth/Auth";
import Login from "../pages/login/Login";
import Feed from "../pages/feed/Feed";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AuthLayout,
            children: [
                {
                    index: true,
                    element: <Navigate to="login" replace />,
                },
                { path: "login", Component: Login },
                { path: "register", Component: Register },
                { path: "feed", Component: Feed },
                { path: "*", Component: Landing },
            ],
        },
    ],
    { basename: "/dmi" }
);

export default router;
