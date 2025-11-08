import { createBrowserRouter, Navigate } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import Landing from "../pages/Landing";

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
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ],
);

export default router;
