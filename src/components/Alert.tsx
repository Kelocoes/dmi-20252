import { Snackbar, Alert as MuiAlert, type AlertColor } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../reducers/AppReducer";

export default function Alert() {
    const [open, setOpen] = useState(false);
    const message = useSelector((state: RootState) => state.message);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (message.message) {
            setOpen(true);
        }
    }, [message]);

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert severity={message.severity as AlertColor} variant="filled" sx={{ width: "100%" }}>
                {message.message}
            </MuiAlert>
        </Snackbar>
    );
}
