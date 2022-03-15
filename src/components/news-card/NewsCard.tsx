import React from 'react'
import styles from './newscard.module.scss'

function NewsCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                <div className={styles.card_content__title}>
                    Техническая поддержка по работе в системе "Мираполис", СДО "Прометей"
                </div>
                <div className={styles.card_content__description}>
                    <span>
                        <p>
                            Внимание!
                        </p>
                        <p>
                            По вопросам работы в системах "Мираполис" (все формы обучения) и "Прометей" (очная, вечерняя ф.о. и магистратура) отправлять СТРОГО на почту технической поддержки <a href="mailto:elearning@omgtu.tech">elearning@omgtu.tech&nbsp;</a> или звонить <a href="tel:+73812653280">65-31-80&nbsp;</a> добавочный номер 1 (либо внутренний номер).
                        </p>
                        <p>
                            "Прометей" (заочное обучение, кроме магистратуры) e-mail: <a href="mailto:parol_prometey@mail.ru">parol_prometey@mail.ru&nbsp;</a> . Тел.: <a href="tel:+73812653394">65-33-94&nbsp;</a> добавочный номер 2 (либо внутренний номер).
                        </p>
                        <p>
                            Другие службы на эти вопросы не отвечают!!! При обращении указывайте ФИО (полностью) и кафедру (для преподавателей) или группу (для студентов)!
                        </p>
                    </span>
                </div>
            </div>
            <div className={styles.card_info}>
                <div className={styles.continue_read}> Читать далее </div>
                <div className={styles.card_info__date}>
                    <span>
                        17.06.2021
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard