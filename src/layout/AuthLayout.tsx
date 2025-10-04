import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
    const isAuthenticated = localStorage.getItem("user");
    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
}
