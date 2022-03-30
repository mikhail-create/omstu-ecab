import React from 'react'
import styles from './recordbook.module.scss'

export interface TableRowProps {
    rate?: string
}

function TableRow(props: TableRowProps) {
    return (
        <tr className={
            (props.rate === "good" ? styles.good : '') ||
            (props.rate === "bad" ? styles.bad : '') ||
            (props.rate === "middle" ? styles.middle : '') ||
            (props.rate === "excellent" ? styles.excellent : '')

        }>
            <td>
                1
            </td>
            <td>
                Программирование
            </td>
            <td>
                182
            </td>
            <td>
                100
            </td>
            <td>
                Отлично
            </td>
            <td>
                30.03.2022
            </td>
            <td>
                Леонов Михаил Андреевич
            </td>
        </tr>
    )
}

export default TableRow