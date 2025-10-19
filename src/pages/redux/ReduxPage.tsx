import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import { setMessage } from "../../reducers/message/MessageReducer";
import type { RootState } from "../../reducers/AppReducer";
import { changeTheme } from "../../reducers/theme/ThemeReducer";

export default function ReduxPage() {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleAlert = () => {
        if (inputRef.current) {
            dispatch(setMessage(`Mensaje desde Redux: ${inputRef.current.value}`));
        }
    };

    const handleTheme = () => {
        dispatch(changeTheme());
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Redux Page</h1>
            <p>Página para probar redux</p>
            <input ref={inputRef} type="text" placeholder="Escribe algo..." className="input input-bordered w-full max-w-xs mb-4" />
            <button className="btn btn-primary" onClick={handleAlert}>
                Probar Redux
            </button>
            <button className="btn btn-secondary" onClick={handleTheme}>
                Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
            </button>
        </div>
    );
}
