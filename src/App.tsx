import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.scss';
import MainLayout from './layouts/main/MainLayout';
import LoginPage from './pages/login/LoginPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import RegistrationPage from './pages/registation/RegistrationPage';
import NewsPage from './pages/news/NewsPage';
import { useActions } from './hooks/useActions';
import PersonalPage from './pages/personal/PersonalPage';
function App() {
    let { checkAuth } = useActions()
    useEffect(() => {
        if (localStorage.getItem('refresh')) {
            checkAuth()
        } 
    }, [])
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='registration' element={<RegistrationPage />} />
                    <Route path='news' element={<MainLayout component={<NewsPage />} />} />
                    <Route path='portfolio' element={<MainLayout component={<PortfolioPage />} />} />
                    <Route path='personal' element={<MainLayout component={<PersonalPage />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
