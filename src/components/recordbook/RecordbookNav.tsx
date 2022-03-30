import React from 'react'
import styles from './recordbook.module.scss'

function RecordbookNav() {
    return (
        <div className={styles.recordbook_nav}>
            <div className={styles.recordbook_nav__item}>
                Семестр 1
            </div>
            <div className={`${styles.active} ${styles.recordbook_nav__item}`}>
                Семестр 2
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 3
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 4
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 5
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 6
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 7
            </div>
            <div className={styles.recordbook_nav__item}>
                Семестр 8
            </div>
        </div>
    )
}

export default RecordbookNav