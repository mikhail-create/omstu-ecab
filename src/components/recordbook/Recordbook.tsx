import React from 'react'
import InfoCard from './InfoCard'
import styles from './recordbook.module.scss'
import RecordbookNav from './RecordbookNav'
import TableRow from './TableRow'

function Recordbook() {
    return (
        <div className={styles.recordbook}>
            <div className={styles.recordbook_header}>
                <InfoCard />
                <RecordbookNav />
            </div>
            <div className={styles.recordbook_content}>
                <div className={styles.recordbook_content__title}>
                    Экзамены:
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Название предмета
                            </th>
                            <th>
                                Кол. часов
                            </th>
                            <th>
                                Рейтинг
                            </th>
                            <th>
                                Оценка
                            </th>
                            <th>
                                Дата
                            </th>
                            <th>
                                Преподаватель
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow rate='good' />
                        <TableRow rate='good' />
                        <TableRow rate='good' />
                        <TableRow rate='excellent' />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recordbook