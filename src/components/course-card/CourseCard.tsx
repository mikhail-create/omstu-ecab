import React, { useEffect, useState } from 'react'
import { MdFileDownload } from 'react-icons/md'
import styles from './coursecard.module.scss'

export interface CourseCardProps {
    course: string,
    items?: any
}

function CourseCard(props: CourseCardProps) {
    const [isCollapsed, setIsCollapsed] = useState(Boolean)

    const collapseCard = () => {
        console.log(props.items)
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header} onClick={collapseCard}>
                <div className={styles.card_header_title}>
                    <span className={`${styles.card_header_title__image}  ${isCollapsed ? styles.peach : styles.green}`}>
                        {props.course[0]}
                    </span>
                    <span className={styles.card_header_title__name}>
                        {props.course}
                    </span>
                </div>
                <span className={styles.card_header__count}>
                    {props.items.length}
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
                        {
                            props.items.map((card: any) =>
                                <div className={styles.card_files_list__item}>
                                    <div>
                                        <a href={card.path}>
                                            {card.name}
                                        </a>
                                        <span>
                                            <span className={styles.icon}>
                                                <MdFileDownload />
                                            </span>
                                        </span>
                                    </div>
                                    <span>
                                        {card.semester}
                                    </span>
                                </div>
                            )
                        }
                        {/* <div className={styles.card_files_list__item}>
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
                        </div> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default CourseCard