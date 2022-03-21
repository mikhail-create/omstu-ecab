import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HeaderButton from '../nav-button/NavButton';
import Logo from '../../images/icons/logo.svg'
import styles from './header.module.scss';
import { MdLaptop, MdLibraryBooks, MdNotes, MdPerson, MdSettings } from 'react-icons/md';
import { history } from '../../_helpers/history';
import LogoutButton from '../logout-button/LogoutButton';

export interface HeaderMenuProps {
    page?: number
}

function HeaderMenu(props: HeaderMenuProps) {
    return (
        <div className={styles.header}>
            <div className={styles.header_nav}>
                <span className={styles.header_nav__logo}>
                    <img src={Logo} />
                </span>
                <HeaderButton title="Главная" path="/news" icon={<MdNotes color='#3F3F44' size='20' />} />
                <HeaderButton title="Контактная работа" current={props.page === 2} path="/remote" icon={<MdLaptop color='#3F3F44' size='20' />} />
                <HeaderButton title="Портфолио"  current={props.page === 3} path="/portfolio" icon={<MdPerson color='#3F3F44' size='20' />} />
                <HeaderButton title="Мои данные" current={props.page === 4} path="/personal" icon={<MdSettings color='#3F3F44' size='20' />} />
                <HeaderButton title="Учебный процесс" current={props.page === 5} path="/study" icon={<MdLibraryBooks color='#3F3F44' size='20' />} /> 
                <LogoutButton />
            </div>
        </div>
    )
}

export default HeaderMenu