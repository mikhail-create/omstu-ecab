import React from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.scss';
import MainLayout from './layouts/main/MainLayout';
import AdminPage from './pages/admin/AdminPage';
import LoginPage from './pages/login/LoginPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import RegistrationPage from './pages/registation/RegistrationPage';
import UsersPage from './pages/users/UsersPage';
import { history } from './_helpers/history';
import NewsPage from './pages/news/NewsPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='registration' element={<RegistrationPage />} />
                    <Route path='users' element={<UsersPage />} />
                    <Route path='admin' element={<AdminPage />} />
                    <Route path='news' element={<MainLayout component={<NewsPage />} />} />
                    <Route path='portfolio' element={<MainLayout component={<PortfolioPage />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
