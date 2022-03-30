import React from 'react'
import styles from './recordbook.module.scss'

export interface RecordbookProps {
    email: string | undefined
    number: string | undefined
    name: string | undefined
    format: string | undefined
    speciality: string | undefined
    requisites: string | undefined
    librarycard: string | undefined
}

function InfoCard(props: RecordbookProps) {
    return (
        <div className={styles.recordbook_info}>
            <div className={styles.recordbook_info__owner}>
                {props.name}
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Номер книжки:
                </span>
                <span>
                    {props.number}
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Форма обучения:
                </span>
                <span>
                    {props.format}
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Специальность:
                </span>
                <span>
                   {props.speciality}
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Реквизиты в СДО "Прометей":
                </span>
                <span>
                   {props.requisites}
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Читательский билет:
                </span>
                <span>
                    {props.librarycard}
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    <a href="">
                        Доступ в ЭБС "Арбуз"
                    </a>
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    <a href="">
                        Доступ к ресурсам библиотеки
                    </a>
                </span>
            </div>
        </div>
    )
}

export default InfoCard