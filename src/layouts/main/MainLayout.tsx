import React, { ComponentType, useState } from 'react';
import HeaderMenu from '../../components/nav-menu/HeaderMenu';
import UserProfile from '../../components/user-profile/UserProfile';

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