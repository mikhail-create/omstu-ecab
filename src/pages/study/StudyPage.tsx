import React from 'react'
import Recordbook from '../../components/recordbook/Recordbook'
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
    </div>
  )
}

export default StudyPage