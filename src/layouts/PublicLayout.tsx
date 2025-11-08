import { Outlet } from "react-router";

export default function PublicLayout() {
    return (
        <div className="min-h-screen bg-gray-800">
            <Outlet />
        </div>
    );
}
