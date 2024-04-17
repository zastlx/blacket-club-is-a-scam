import { Routes, Route } from "react-router-dom";
import { Authentication } from "./pages";
import { AuthType } from "./pages/Authentication";
import { useState } from "react";
import Background from "./components/Background";

function App() {
    // TODO: Add a state to control the background visibility
    const [background] = useState<boolean>(true);


    return (
        <>
            {background && <Background />}

            <Routes>
                <Route path="/login" element={<Authentication type={AuthType.Login} />} />
                <Route path="/register" element={<Authentication type={AuthType.Register} />} />
            </Routes>
        </>
    );
}

export default App;
