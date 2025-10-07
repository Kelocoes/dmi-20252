import { createBrowserRouter, Navigate } from "react-router";

import Landing from "../pages/landing/Landing";
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
                { path: "feed", Component: Feed },
                { path: "*", Component: Landing },
            ],
        },
    ],
    { basename: "/dmi" }
);

export default router;
