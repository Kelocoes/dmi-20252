import React from "react";

interface FloatingActionButtonProps {
    mainIcon?: string;
    onClick?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ mainIcon = "F", onClick }) => {
    return (
        <button className="btn btn-lg btn-circle btn-primary fixed bottom-4 right-4" onClick={onClick}>
            {mainIcon}
        </button>
    );
};

export default FloatingActionButton;
