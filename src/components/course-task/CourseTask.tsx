import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import styles from './coursetask.module.scss'

interface CourseTaskProps {
    name: string
    amount: number
    _id: string
}

function CourseTask(props: CourseTaskProps) {
    const navigate = useNavigate();
    return (
        <div className={styles.task}>
            <div className={styles.task__image}>
                {props.name[0]}
            </div>
            <div className={styles.task__name}>
                {props.name}
            </div>
            <div className={styles.task__wrapper}>
                <div className={styles.task__amount}>
                    {props.amount}
                </div>
                <div className={styles.task__about} onClick={() => {
                    navigate(`/remote/${props._id}`)
                }}>
                    <MdSearch size={25} />
                </div>
            </div>

        </div>
    )
}

export default CourseTask