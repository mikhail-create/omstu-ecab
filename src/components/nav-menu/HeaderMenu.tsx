import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HeaderButton from '../nav-button/NavButton';
import Logo from '../../images/icons/logo.svg'
import styles from './header.module.scss';
import { MdLaptop, MdLibraryBooks, MdMessage, MdNotes, MdPerson, MdPostAdd, MdSettings } from 'react-icons/md';
import LogoutButton from '../logout-button/LogoutButton';

function HeaderMenu() {
    return (
        <div className={styles.header}>
            <div className={styles.header_nav}>
                <span className={styles.header_nav__logo}>
                    <img src={Logo} />
                </span>
                <HeaderButton title="Главная" path="/news" icon={<MdNotes color='#3F3F44' size='20' />} />
                <HeaderButton title="Контактная работа" path="/remote" icon={<MdLaptop color='#3F3F44' size='20' />} />
                <HeaderButton title="Портфолио" path="/portfolio" icon={<MdPerson color='#3F3F44' size='20' />} />
                <HeaderButton title="Мои данные" path="/personal" icon={<MdSettings color='#3F3F44' size='20' />} />
                <HeaderButton title="Учебный процесс" path="/study" icon={<MdLibraryBooks color='#3F3F44' size='20' />} />
                <HeaderButton title="Сообщения" path="/messages" icon={<MdMessage color='#3F3F44' size='20' />} />
                <LogoutButton />
            </div>
        </div>
    )
}

export default HeaderMenu