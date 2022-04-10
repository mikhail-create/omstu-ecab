import React, { ComponentType } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMenu from '../../components/nav-menu/HeaderMenu';
import UserProfile from '../../components/user-profile/UserProfile';
import styles from './mainlayout.module.scss'

const MainLayout = () => {
    return (
        <div className={styles.main_layout}>
            <div className={styles.main_layout__nav}>
                <HeaderMenu />
            </div>
            <div className={styles.main_layout__content}>
                <Outlet />
            </div>
            <div className={styles.main_layout_profile}>
                <UserProfile />
            </div>
        </div>
    );
};

export default MainLayout;