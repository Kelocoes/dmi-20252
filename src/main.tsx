import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import router from "./router/Router";
import { persistor, store } from "./reducers/Store";
import Alert from "./components/Alert";
import ThemeProvider from "./theme/Theme";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <RouterProvider router={router} />
                    <Alert />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
);
