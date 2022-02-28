import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import LoginPage from './pages/login/LoginPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='login' element={<LoginPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
