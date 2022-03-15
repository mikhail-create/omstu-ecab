import React from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.scss';
import News from './components/news/News';
import MainLayout from './layouts/main/MailLayout';
import AdminPage from './pages/admin/AdminPage';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registation/RegistrationPage';
import UsersPage from './pages/users/UsersPage';
import { history } from './_helpers/history';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='registration' element={<RegistrationPage />} />
                    <Route path='users' element={<UsersPage />} />
                    <Route path='admin' element={<AdminPage />} />
                    <Route path='news' element={<MainLayout component={<News />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
