import { Routes, Route } from "react-router-dom";
import { Authentication, Home } from "./pages";
import { AuthType } from "./pages/Authentication";
import { useState } from "react";
import { Background, Bar } from "./components";

function App() {
    // TODO: Add a state to control the background visibility
    const [background] = useState<boolean>(true);
    const [bar] = useState<boolean>(true);

    return (
        <>
            {background && <Background />}

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Authentication type={AuthType.Login} />} />
                <Route path="/register" element={<Authentication type={AuthType.Register} />} />
            </Routes>

            {bar && <Bar />}
        </>
    );
}

export default App;
