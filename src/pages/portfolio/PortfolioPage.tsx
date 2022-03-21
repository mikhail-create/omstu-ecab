import React, { useState } from 'react'
import CoursesList from '../../components/courses-list/CoursesList';
import { userService } from '../../_services/user.service';
import styles from './portfoliopage.module.scss'

function PortfolioPage() {
    const [name, setName] = useState(String)
    userService.getUser().then(
        user=> {
            setName(user.name)
        }
    )
    const currentdate = new Date();
    const time = currentdate.getHours()
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolio_greeting}>
                {(time >= 6 && time < 12) && "Доброе утро, "}
                {(time >= 12 && time < 18) && "Добрый день, "}
                {(time >= 18 && time <= 23) && "Добрый вечер, "}
                {(time >= 0 && time < 6) && "Доброй ночи, "}
                <span className={styles.portfolio_greeting__name}>{name.split(' ')[0]}</span>😄
            </div>
            <div className={styles.portfolio_content}>
                <CoursesList />
            </div>
        </div>
    )
}

export default PortfolioPage