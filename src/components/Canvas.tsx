import { useEffect, useState } from "react";

import canvaService from "../services/supabase/canvaService";
import type { User } from "../types/User";
import { type Positions } from "../types/Positions";

import Cell from "./Cell";

export default function Canvas() {
    const [positions, setPositions] = useState<Positions[]>([]);
    const cellSize = 25;

    const getInfo = () => {
        canvaService.getPositions().then((response) => {
            if (response.success) {
                setPositions(response.data as Positions[]);
            } else {
                console.error("Failed to fetch positions:", response.error);
            }
        });
    };
    useEffect(() => {
        getInfo();
    }, []);

    const handleClickCell = (x: number, y: number) => {
        console.info("Cell clicked at:", x, y);
        const userData = localStorage.getItem("userInfo");

        if (!userData) {
            console.error("No user info found in local storage.");
            return;
        }
        const userParsed = JSON.parse(userData) as User;
        canvaService.savePosition(x, y, userParsed.id).then((response) => {
            if (response.success) {
                console.info("Position saved:", response.data);
                getInfo();
            } else {
                console.error("Failed to save position:", response.error);
            }
        });
    };

    return (
        <div className="grid grid-cols-25 grid-rows-25 gap-0.5">
            {Array.from({ length: 25 }, (_, y) =>
                Array.from({ length: 25 }, (_, x) => (
                    <Cell
                        key={`${x}-${y}`}
                        size={cellSize}
                        color={positions.find((pos) => pos.x === x && pos.y === y)?.created_by.color || "#ffffff"}
                        onClick={() => handleClickCell(x, y)}
                        letter={positions.find((pos) => pos.x === x && pos.y === y)?.created_by.letter || ""}
                    />
                ))
            )}
        </div>
    );
}
