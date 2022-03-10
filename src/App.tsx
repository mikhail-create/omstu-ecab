import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import HeaderMenu from './components/header/HeaderMenu';
import UsersTable from './components/users-table/UsersTable';
import MainLayout from './layouts/main/MailLayout';
import AdminPage from './pages/admin/AdminPage';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registation/RegistrationPage';
import UsersPage from './pages/users/UsersPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='login' element={<LoginPage/>} />
                    <Route path='registration' element={<RegistrationPage/>} />
                    <Route path='users' element={<UsersPage/>} />
                    <Route path='admin' element={<AdminPage/>} />
                    <Route path='news' element={<MainLayout component={<UsersTable />} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
