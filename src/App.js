import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import GenerateQr from "./pages/GenerateQr";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ContactPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin/generate-qr" element={<GenerateQr />} />
            </Routes>
        </Router>
    );
}

export default App;
