import { createRoot } from "react-dom/client";
import { StoreProvider } from "app/providers/StoreProvider";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { PageError } from "widgets/PageError";
import { App } from "./app/App";

const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary fallback={<PageError />}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
