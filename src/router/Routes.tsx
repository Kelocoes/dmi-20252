import { createBrowserRouter, Navigate } from "react-router";

import CanvasPage from "../pages/CanvasPage";
import PublicLayout from "../layouts/PublicLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateLayout from "../layouts/PrivateLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            {
                index: true,
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
        ],
    },
    {
        path: "/canvas",
        Component: PrivateLayout,
        children: [
            {
                index: true,
                Component: CanvasPage,
            },
        ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
