import React from 'react'
import styles from './recordbook.module.scss'

export interface RecordbookNavProps {
    setCourse: any
    current?: number
}


function RecordbookNav(props: RecordbookNavProps) {
    const semesters = [
        'Семестр 1',
        'Семестр 2',
        'Семестр 3',
        'Семестр 4',
        'Семестр 5',
        'Семестр 6',
        'Семестр 7',
        'Семестр 8'
    ]
    return (
        <div className={styles.recordbook_nav}>
            {
                semesters.map((semester: string, index: number) => {
                    return (
                        <div key={index} className={`${styles.recordbook_nav__item} ${props.current === index + 1 && styles.active}`} onClick={() => props.setCourse(index + 1)}>
                            {semester}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecordbookNav