import { Outlet } from "react-router";

export default function PrivateLayout() {
    return (
        <div className="min-h-screen bg-gray-800">
            <Outlet />
        </div>
    );
}
