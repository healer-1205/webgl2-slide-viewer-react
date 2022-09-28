import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageProvider } from "./contexts";
import { Home } from "./pages/home";
import { Viewer } from "./pages/viewer";
import "./App.css";

function App() {
    return (
        <ImageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/webGlViewer" element={<Viewer />}></Route>
                </Routes>
            </BrowserRouter>
        </ImageProvider>
    );
}

export default App;
