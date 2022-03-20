import React, { ComponentType, useState } from 'react';
import Calendar from 'react-calendar';
import { Route } from 'react-router-dom';
import HeaderMenu from '../../components/header/HeaderMenu';
import UserProfile from '../../components/user-profile/UserProfile';
import styles from './mainlayout.module.scss'

const MainLayout = ({ component }: any) => {
    const [value, onChange] = useState(new Date());

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
                {/* <Calendar onChange={onChange} value={value} /> */}
            </div>
        </div>
    );
};

interface MainLayoutProps {
    component: ComponentType<any>
}

export default MainLayout;