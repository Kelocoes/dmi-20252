import { combineReducers } from "@reduxjs/toolkit";

import MessageReducer from "./message/MessageReducer";
import ThemeReducer from "./theme/ThemeReducer";

const appReducer = combineReducers({
    message: MessageReducer,
    theme: ThemeReducer,
});
export default appReducer;
export type RootState = ReturnType<typeof appReducer>;
