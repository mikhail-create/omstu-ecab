import React from 'react'
import Recordbook from '../../components/recordbook/Recordbook'
import StatsContainer from '../../components/stats-container/StatsContainer'
import styles from './studypage.module.scss'

function StudyPage() {
    return (
        <div className={styles.study}>
            <div className={styles.study__title}>
                Зачетная книжка
            </div>
            <div className={styles.study__recodrbook}>
                <Recordbook />
            </div>
            <div className={styles.study__stats}>
                <div className={styles.study__title}>
                    Ваша статистика
                </div>
                <StatsContainer />
            </div>
        </div>
    )
}

export default StudyPage