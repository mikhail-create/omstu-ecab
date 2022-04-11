import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './navbutton.module.scss'

interface NavButtonProps {
    title: string,
    current?: boolean,
    path?: any,
    icon?: Object
}

function NavButton(props: NavButtonProps) {
    const path = props.path
    return (
        <div>
            <NavLink
                to={path}
                className={({ isActive }) => `${styles.button} ${isActive ? styles.active : ''}`}
            >
                <div className={styles.button__icon}>
                    {props.icon}
                </div>
                <span className={styles.button__link}>
                    {props.title}
                </span>
            </NavLink>
        </div>
    )
}

export default NavButton