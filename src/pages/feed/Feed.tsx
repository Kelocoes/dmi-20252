import { Navigate } from "react-router";

import { useAuth } from "../../layout/Auth/Auth";

export default function Feed() {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div id="feed-page">
            <h1>Feed Page</h1>
            <p>Welcome, {user?.username || user?.email}!</p>
        </div>
    );
}
