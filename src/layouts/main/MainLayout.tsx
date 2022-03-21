import React, { ComponentType, useState } from 'react';
import Calendar from 'react-calendar';
import { Route } from 'react-router-dom';
import HeaderMenu from '../../components/nav-menu/HeaderMenu';
import UserProfile from '../../components/user-profile/UserProfile';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewsPage from '../../pages/news/NewsPage';
import PortfolioPage from '../../pages/portfolio/PortfolioPage';
import styles from './mainlayout.module.scss'

const MainLayout = ({ component }: any) => {
    return (
        <div className={styles.main_layout}>
            <div className={styles.main_layout__nav}>
                <HeaderMenu />
            </div>
            <div className={styles.main_layout__content}>
                {component}
            </div>
            <div className={styles.main_layout_profile}>
                <UserProfile />
            </div>
        </div>
    );
};

interface MainLayoutProps {
    component: ComponentType<any>
}

export default MainLayout;