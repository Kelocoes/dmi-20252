import { Outlet } from "react-router";

import SideBar from "../components/SideBar";

export default function PrivateLayout() {
    return (
        <>
            <SideBar>
                <div className="min-h-screen bg-gray-800">
                    <Outlet />
                </div>
            </SideBar>
        </>
    );
}
