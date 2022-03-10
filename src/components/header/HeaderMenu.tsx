import React from 'react'
import HeaderButton from '../header-button/HeaderButton';
import styles from './header.module.scss';

function HeaderMenu() {
    return (
        <div className={styles.header}>
            <div className={styles.header_nav}>
                <span className={styles.header_nav__logo}>
                    EduCab
                </span>
                <HeaderButton title="Главная" />
                <HeaderButton title="Контактная работа" />
                <HeaderButton title="Портфолио" />
                <HeaderButton title="Мои данные" />
                <HeaderButton title="Учебный процесс" />
                <HeaderButton title="Мои заявки" />
                <HeaderButton title="Выход" />
            </div>
        </div>
    )
}

export default HeaderMenu