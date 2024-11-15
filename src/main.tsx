import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from './App.tsx'
import './index.css'
import { addEditorChangeHandler, getEditor } from "./store/editor";

const root: Root = createRoot(document.getElementById('root')!);

function render(): void {
    root.render(
        <StrictMode>
            <App editor={getEditor()}/>
        </StrictMode>
    )
}

addEditorChangeHandler(render)
render()