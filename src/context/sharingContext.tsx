import React, { createContext } from "react";

export const SharingContext = createContext<{
    myState: number;
    setMyState: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
