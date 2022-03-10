import React from 'react'
import styles from './navigation.module.scss'

export interface NavigationProps {
    current: number,
}

function Navigation(props: NavigationProps) {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_list}>
                <span className={`${styles.navigation_list__item} ${props.current === 1 && styles.current}`}>
                    Get all users
                </span>
                <span className={`${styles.navigation_list__item} ${props.current === 2 && styles.current}`}>
                    Create User
                </span>
                <span className={`${styles.navigation_list__item} ${props.current === 3 && styles.current}`}>
                    Update User
                </span>
            </div>
        </div>
    )
}

export default Navigation