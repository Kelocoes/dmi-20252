// import { useContext } from "react";

// import { SharingContext } from "../../../context/sharingContext";

import { memo } from "react";

import ComponentC from "./ComponentC";

const ComponentB = () => {
    console.info("Rendering Component B");
    // const context = useContext(SharingContext);
    // if (!context) throw new Error("Component must be used inside SharingProvider");
    // const { myState } = context;

    return (
        <div className="card w-max bg-base-100 shadow-md border border-gray-300">
            <div className="card-body">
                <h2 className="card-title">Component B</h2>
                {/* <p>Estado actual: {myState}</p> */}
                <p>Descripción breve de Component B.</p>
                <ComponentC />
            </div>
        </div>
    );
};

ComponentB.displayName = "ComponentB";

export default memo(ComponentB);
