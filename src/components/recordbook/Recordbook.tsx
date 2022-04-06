import React, { useEffect, useState } from 'react'
import { recordbooksServise } from '../../_services/recordbooks.service'
import { RecordBookData } from '../../_types/recordbook-model'
import InfoCard from './InfoCard'
import styles from './recordbook.module.scss'
import RecordbookNav from './RecordbookNav'
import TableRow from './TableRow'

function Recordbook() {
    const [recordBook, setRecordBook] = useState<RecordBookData>()
    const [current, setCurrent] = useState(1)

    function setCourse(curr: number) {
        setCurrent(curr)
    }

    useEffect(() => {
        (async () => {
            setRecordBook((await recordbooksServise.getUserRecordBook()).data)
        })()
    }, [])

    return (
        <div className={styles.recordbook}>
            <div className={styles.recordbook_header}>
                <InfoCard
                    email={recordBook?.email}
                    number={recordBook?.number}
                    name={recordBook?.name}
                    format={recordBook?.format}
                    speciality={recordBook?.speciality}
                    requisites={recordBook?.requisites}
                    librarycard={recordBook?.librarycard}
                />
                <RecordbookNav setCourse={setCourse} current={current} />
            </div>

            {
                recordBook?.semesters?.map((semester, index: number) => {
                    return (
                        <div className={`${styles.recordbook_content} ${current === (index +1) ? '' : styles.hiden}`} key={index}>
                            <div className={styles.recordbook_content__title}>
                                Экзамены:
                            </div>
                            < table >
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
                                    {
                                        semester.exams.map((exam, index: number) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    index={index}
                                                    rate={exam.rate}
                                                    nameOfCourse={exam.nameOfCourse}
                                                    hours={exam.hourse}
                                                    rating={exam.rating}
                                                    date={exam.date}
                                                    teacher={exam.teacher}
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className={styles.recordbook_content__title}>
                                Зачеты:
                            </div>
                            < table >
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
                                    {
                                        semester.offset.map((offset, index: number) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    index={index}
                                                    rate={offset.rate}
                                                    nameOfCourse={offset.nameOfCourse}
                                                    hours={offset.hourse}
                                                    rating={offset.rating}
                                                    date={offset.date}
                                                    teacher={offset.teacher}
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Recordbook