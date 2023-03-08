import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/modal_context";
import { ThemeProvider } from "./context/theme-switch-context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <ThemeProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </ThemeProvider>
    // </React.StrictMode>
);
