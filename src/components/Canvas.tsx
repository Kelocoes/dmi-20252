import { useEffect, useState } from "react";

import canvaService from "../services/supabase/canvaService";
import type { User } from "../types/User";
import { type Positions } from "../types/Positions";

import Cell from "./Cell";

export default function Canvas() {
    const cellSize = 25;

    const handleClickCell = (x: number, y: number) => {
        console.info("Cell clicked at:", x, y);
    };

    return (
        <div className="">
            {Array.from({ length: 25 }, (_, y) =>
                Array.from({ length: 25 }, (_, x) => (
                    <Cell
                        key={`${x}-${y}`}
                        size={cellSize}
                        color={"#ffffff"}
                        onClick={() => handleClickCell(x, y)}
                        letter={""}
                    />
                ))
            )}
        </div>
    );
}
