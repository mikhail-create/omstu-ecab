import React from 'react'
import styles from './recordbook.module.scss'

export interface TableRowProps {
    nameOfCourse: string,
    hours: number,
    rating: number,
    rate: string,
    date: string,
    teacher: string,
    index: number
}

function TableRow(props: TableRowProps) {
    return (
        <tr className={
            (props.rate === "Хорошо" ? styles.good : '') ||
            (props.rate === "Зачтено" ? styles.good : '') ||
            (props.rate === "Не удовлетворительно" ? styles.bad : '') ||
            (props.rate === "Не зачтено" ? styles.bad : '') ||
            (props.rate === "Удовлетворительно" ? styles.middle : '') ||
            (props.rate === "Отлично" ? styles.excellent : '')

        }>
            <td>
                {props.index}
            </td>
            <td>
                {props.nameOfCourse}
            </td>
            <td>
                {props.hours}
            </td>
            <td>
                {props.rating}
            </td>
            <td>
                {props.rate}
            </td>
            <td>
                {props.date}
            </td>
            <td>
                {props.teacher}
            </td>
        </tr>
    )
}

export default TableRow