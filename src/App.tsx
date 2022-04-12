import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import openSocket from 'socket.io-client';
import './App.scss';
import MainLayout from './layouts/main/MainLayout';
import LoginPage from './pages/login/LoginPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import RegistrationPage from './pages/registation/RegistrationPage';
import NewsPage from './pages/news/NewsPage';
import { useActions } from './hooks/useActions';
import PersonalPage from './pages/personal/PersonalPage';
import StudyPage from './pages/study/StudyPage';
import RemotePage from './pages/remote/RemotePage';
import TaskList from './components/task-list/TaskList';
import Chat from './pages/chat/Chat';
import AdminPage from './pages/admin/AdminPage';

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
                    <Route path='admin' element={<AdminPage />} />
                    <Route element={<MainLayout />} >
                        <Route path='/news' element={<NewsPage />} />
                        <Route path='/portfolio' element={<PortfolioPage />} />
                        <Route path='personal' element={<PersonalPage />} />
                        <Route path='study' element={<StudyPage />} />
                        <Route path='remote' element={<RemotePage />} />
                        <Route path='remote/:id' element={<TaskList />} />
                        <Route path='messages' element={<Chat />} />
                    </Route>
                </Routes >
            </BrowserRouter>
        </div >
    );
}

export default App;
