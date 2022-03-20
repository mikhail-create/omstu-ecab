import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HeaderButton from '../header-button/HeaderButton';
import Logo from '../../images/icons/logo.svg'
import styles from './header.module.scss';

function HeaderMenu() {
    let { currentPage } = useTypedSelector(state => state.navigation)

    return (
        <div className={styles.header}>
            <div className={styles.header_nav}>
                <span className={styles.header_nav__logo}>
                    <img src={Logo} />
                </span>
                {
                    currentPage === 1
                        ? <HeaderButton title="Главная" current={true} path="/news" />
                        : <HeaderButton title="Главная" current={false} path="/news"/>
                }
                {
                    currentPage === 2
                        ? <HeaderButton title="Контактная работа" current={true} path="/remote"/>
                        : <HeaderButton title="Контактная работа" current={false} path="/remote" />
                }
                {
                    currentPage === 3
                        ? <HeaderButton title="Портфолио" current={true} path="/portfolio" />
                        : <HeaderButton title="Портфолио" current={false} path="/portfolio" />
                }
                {
                    currentPage === 4
                        ? <HeaderButton title="Мои данные" current={true} path="/personal" />
                        : <HeaderButton title="Мои данные" current={false} path="/personal" />
                }
                {
                    currentPage === 5
                        ? <HeaderButton title="Учебный процесс" current={true} path="/study"  />
                        : <HeaderButton title="Учебный процесс" current={false} path="/study" />
                }

                <HeaderButton title="Выход" path="" />

            </div>
        </div>
    )
}

export default HeaderMenu