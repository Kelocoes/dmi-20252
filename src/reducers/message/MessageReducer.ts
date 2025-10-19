import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        message: "",
        severity: "info",
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = "";
        },
    },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
export type MessageState = ReturnType<typeof messageSlice.reducer>;
