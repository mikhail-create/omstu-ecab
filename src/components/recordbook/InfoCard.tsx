import React from 'react'
import styles from './recordbook.module.scss'

function InfoCard() {
    return (
        <div className={styles.recordbook_info}>
            <div className={styles.recordbook_info__owner}>
                ЛЕОНОВ Михаил Андреевич
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Номер книжки:
                </span>
                <span>
                    САУ-06-18
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Форма обучения:
                </span>
                <span>
                    очное обучение
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Специальность:
                </span>
                <span>
                    27.03.03 Системный анализ и управление
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Реквизиты в СДО "Прометей":
                </span>
                <span>
                    логин:sau-181_006, пароль: fitiks8sau42
                </span>
            </div>
            <div className={styles.recordbook_info__item}>
                <span>
                    Читательский билет:
                </span>
                <span>
                    № 24244
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