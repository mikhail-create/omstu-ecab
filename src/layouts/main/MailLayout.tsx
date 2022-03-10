import React, { ComponentType } from 'react';  
import { Route } from 'react-router-dom';
import HeaderMenu from '../../components/header/HeaderMenu';
import styles from './mainlayout.module.scss'


const MainLayout = ({component}: any) => {
  return (
    <div className={styles.main_layout}>
      <div className={styles.main_layout__header}>
        <HeaderMenu />
      </div>
      <div className={styles.main_layout__content}>
        {component}
      </div>
    </div>
  );
};

interface MainLayoutProps{
  component: ComponentType<any>
}

export default MainLayout;