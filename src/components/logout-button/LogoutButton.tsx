import React from 'react'
import { MdDoorBack, MdDoorSliding, MdOutlineDoorFront } from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import styles from './logoutbutton.module.scss';

function LogoutButton() {
    let { signOut } = useActions()
    return (
        <div className={styles.button} onClick={signOut}>
            <div className={styles.button__icon}>
                <MdOutlineDoorFront color='#3F3F44' size='20' />
            </div>
            <span className={styles.button__link}>
                Выход
            </span>
        </div>
    )
}

export default LogoutButton