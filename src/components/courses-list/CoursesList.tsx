import React from 'react'
import CourseCard from '../course-card/CourseCard'
import styles from './courseslist.module.scss'

function CoursesList() {
  return (
    <div className={styles.courses}>
        <div className={styles.courses__title}>
            Ваши дисциплины 
        </div>
        <div className={styles.courses_header}>
            <div className={styles.courses_header__name}>
                Название дисциплины
            </div>
            <div className={styles.courses_header__count}>
                Кол-во работ
            </div>
        </div>
        <div className={styles.courses_body}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    </div>
  )
}

export default CoursesList