import type React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../reducers/AppReducer";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return <div data-theme={theme}>{children}</div>;
}
