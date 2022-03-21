import React from 'react'
import CoursesList from '../../components/courses-list/CoursesList';
import styles from './portfoliopage.module.scss'

function PortfolioPage() {
    const name = localStorage.getItem('userName')
    const currentdate = new Date();
    const time = currentdate.getHours()
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolio_greeting}>
                {(time >= 6 && time < 12) && "Доброе утро, "}
                {(time >= 12 && time < 18) && "Добрый день, "}
                {(time >= 18 && time <= 23) && "Добрый вечер, "}
                {(time >= 0 && time < 6) && "Доброй ночи, "}
                <span className={styles.portfolio_greeting__name}>{name}</span>😄
            </div>
            <div className={styles.portfolio_content}>
                <CoursesList />
            </div>
        </div>
    )
}

export default PortfolioPage