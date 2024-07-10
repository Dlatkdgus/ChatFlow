import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Login";
import Mainpage from "./pages/Mainpage";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mainpage" element={<Mainpage />} />
            </Routes>
        </Router>
    );
}

export default App;
