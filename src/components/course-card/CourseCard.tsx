import React, { useEffect, useState } from 'react'
import { MdFileDownload } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './coursecard.module.scss'

function CourseCard() {
    const [courseName, setCourseName] = useState("")
    const [courseCount, setCourseCount] = useState(Number)
    const [isCollapsed, setIsCollapsed] = useState(Boolean)

    useEffect(() => {
        setCourseName("Программирование")
        setCourseCount(2)
    }, [])

    const collapseCard = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header} onClick={collapseCard}>
                <div className={styles.card_header_title}>
                    <span className={`${styles.card_header_title__image}  ${isCollapsed ? styles.peach : styles.green}`}>
                        {courseName.charAt(0)}
                    </span>
                    <span className={styles.card_header_title__name}>
                        {courseName}
                    </span>
                </div>
                <span className={styles.card_header__count}>
                    {courseCount}
                </span>
            </div>
            {
                isCollapsed &&
                <div className={`${styles.card_files} ${isCollapsed && styles.form}`}>
                    <div className={styles.card_files__header}>
                        <span>
                            Название файла
                        </span>
                        <span>
                            Семестр
                        </span>
                    </div>
                    <div className={styles.card_files_list}>
                        <div className={styles.card_files_list__item}>
                            <a href="http://localhost:5000/files/1DdZxZKhKCA31066.jpg">
                                Отчет по лабораторной работе 213
                            </a>
                            <span>
                                <span className={styles.icon}>
                                    <MdFileDownload />
                                </span>
                            </span>
                            <span>
                                6
                            </span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CourseCard