import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import UsersPage from './pages/users/UsersPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='login' element={<LoginPage/>} />
                    <Route path='users' element={<UsersPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
