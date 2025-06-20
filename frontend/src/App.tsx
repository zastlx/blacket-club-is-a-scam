import { Routes, Route, Navigate } from "react-router-dom";
import { Authentication, Home } from "./pages";
import { AuthType } from "./pages/Authentication";
import { useState } from "react";
import { Background, Bar } from "./components";

function App() {
    const [background] = useState<boolean>(true);
    const [bar, setBar] = useState<boolean>(false);

    return (
        <>
            {background && <Background />}

            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/" element={<Home setBar={setBar} />} />
                <Route path="/login" element={<Authentication type={AuthType.Login} />} />
                <Route path="/register" element={<Authentication type={AuthType.Register} />} />
            </Routes>

            {bar && <Bar />}
        </>
    );
}

export default App;
