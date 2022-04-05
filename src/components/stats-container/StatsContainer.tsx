import React, { useEffect, useState } from 'react'
import { CartesianAxis, Label, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { recordbooksServise } from '../../_services/recordbooks.service'
import { RecordBookData } from '../../_types/recordbook-model'
import SwtichButton from '../switch-button/SwtichButton'
import styles from './statscontainer.module.scss'

function StatsContainer() {
    const [current, setCurrent] = useState("average")
    const [recordBook, setRecordBook] = useState<RecordBookData>()

    useEffect(() => {
        (async () => {
            setRecordBook((await recordbooksServise.getUserRecordBook()).data)
        })()
    }, [])



    function radioHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrent(event.target.value)
    }

    return (
        <div className={styles.stats}>
            <div className={styles.stats__title}>
                Показатели по результатам сессии:
            </div>
            <form className={styles.stats__form}>
                <SwtichButton
                    current={current}
                    name="average"
                    title='Средний балл'
                    onChange={radioHandler}
                />
                <SwtichButton
                    current={current}
                    name="rating"
                    title='Рейтинг'
                    onChange={radioHandler}
                />
                <SwtichButton
                    current={current}
                    name="attendance"
                    title='Посещаемость'
                    onChange={radioHandler}
                />
            </form>
            <LineChart
                width={900}
                height={400}
                data={
                    recordBook?.semesters.map((semester, index: number) => {
                        return {
                            id: index,
                            average: semester.average,
                            rating: semester.rating,
                            attendance: semester.attendance
                        }
                    })

                }
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <YAxis>
                    <Label position="center" angle={270} className={styles.legend}>Показатели</Label>
                </YAxis>
                <XAxis dataKey='id'>
                    <Label position="center" className={styles.legend}>Семестр</Label>
                </XAxis>
                <Tooltip />
                <CartesianAxis stroke="#f5f5f5" />
                {current === "average" && <Line type="monotone" name="Средний балл: " dataKey="average" stroke="#5FC0CE" />}
                {current === "rating" && <Line type="monotone" name="Рейтинг: " dataKey="rating" stroke="#FFD373" />}
                {current === "attendance" && <Line type="monotone" name="Посещаемость: " dataKey="attendance" stroke="#FF7D73" />}
            </LineChart>
        </div>
    )
}

export default StatsContainer