import { createBrowserRouter, Navigate } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: PublicLayout,
            children: [
                {
                    index: true,
                    Component: Landing,
                },
                { path: "sign-in", Component: SignIn },
                { path: "register", Component: Register },
                { path: "forgot-password", Component: ForgotPassword },
                { path: "update-password", Component: UpdatePassword },
            ],
        },
        {
            path: "/feed",
            Component: PrivateLayout,
            children: [
                {
                    index: true,
                    Component: Feed,
                },
                { path: "profile", Component: Profile },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ],
);

export default router;
