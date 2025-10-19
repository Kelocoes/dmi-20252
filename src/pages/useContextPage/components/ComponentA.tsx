// import { useContext } from "react";

// import { SharingContext } from "../../../context/sharingContext";

import ComponentB from "./ComponentB";

export default function ComponentA() {
    console.info("Rendering Component A");
    // const context = useContext(SharingContext);
    // if (!context) throw new Error("Component must be used inside SharingProvider");
    // const { myState } = context;

    return (
        <div className="card w-max bg-base-100 shadow-md border border-gray-300">
            <div className="card-body">
                <h2 className="card-title">Component A</h2>
                {/* <p>Estado actual: {myState}</p> */}
                <p>Descripción breve de Component A.</p>
                <ComponentB />
            </div>
        </div>
    );
}
