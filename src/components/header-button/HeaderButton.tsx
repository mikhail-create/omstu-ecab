import React from 'react'
import { Link } from 'react-router-dom'
import styles from './headerbutton.module.scss'

interface HeaderButtonProps {
    title: string,
    current?: boolean,
    path?: any
}


function HeaderButton(props: HeaderButtonProps) {
    const path = props.path
    return (
        <div className={`${styles.button} ${props.current ? styles.active : ''}`}>
            <Link className={styles.button__link} to={path}>{props.title}</Link>
        </div>
    )
}

export default HeaderButton