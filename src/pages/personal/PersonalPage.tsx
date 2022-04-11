import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ProfileField from '../../components/profile-field/ProfileField'
import SuccessButton from '../../components/success-button/SuccessButton'
import { UserData } from '../../_models/user-model'
import { userService } from '../../_services/user.service'
import styles from './personalpage.module.scss'

function PersonalPage() {
    const [user, setUser] = useState<UserData>(Object)
    const [userData, setUserData] = useState(Object)
    const [updateStaus, setUpdateStatus] = useState(String)

    useEffect(() => {
        userService.getUser().then(
            response => {
                setUser(response)
                setUserData(response.fullData[0])
            }
        )
    }, [])
    return (
        <div className={styles.personal}>
            <div className={styles.personal_title}>
                Основная информация
            </div>
            <Formik
                initialValues={{
                    email: null,
                    group: null,
                    firstName: null,
                    secondName: null,
                    middleName: null,
                    passportSeries: null,
                    passportNumber: null,
                    previousEducation: null,
                    previousEducationPlace: null,
                    previousEducationYear: null,
                    phone: null,
                    adress: null

                }}
                onSubmit={(values) => {
                    const fullName = (
                        (values.firstName ? values.firstName : user.name.split(' ')[0]) + " " +
                        (values.secondName ? values.secondName : user.name.split(' ')[1]) + " " +
                        (values.middleName ? values.middleName : user.name.split(' ')[2])
                    )
                    const fullData = {
                        passportSeries: values.passportSeries ? values.passportSeries : userData.passportSeries,
                        passportNumber: values.passportNumber ? values.passportNumber : userData.passportNumber,
                        adress: values.adress ? values.adress : userData.adress,
                        previousEducation: values.previousEducation ? values.previousEducation : userData.previousEducation,
                        previousEducationPlace: values.previousEducationPlace ? values.previousEducationPlace : userData.previousEducationPlace,
                        previousEducationYear: values.previousEducationYear ? values.previousEducationYear : userData.previousEducationYear,
                        phone: values.phone ? values.phone : userData.phone
                    }
                    userService.updateUser(
                        values.email ? values.email : user.email,
                        fullName,
                        values.group ? values.group : user.group,
                        [fullData]
                    ).then(
                        response => {
                            setUpdateStatus("Данные успешно обновлены")
                            setTimeout(() => {
                                setUserData(response.fullData[0] ? response.fullData[0] : "")
                            }, 2000)
                        }
                    )
                }}
            >
                <Form className={styles.personal_table}>
                    <div className={styles.personal_table__data}>
                        <ProfileField
                            title='Имя'
                            name='firstName'
                            placeholder={user.name ? user.name.split(' ')[0] : " "}
                        />
                        <ProfileField
                            title='Фамилия'
                            name='secondName'
                            placeholder={user.name ? user.name.split(' ')[1] : " "}
                        />
                        <ProfileField
                            title='Отчество'
                            name='middleName'
                            placeholder={user.name ? user.name.split(' ')[2] : " "}
                        />
                        <ProfileField
                            title='Почта'
                            name='email'
                            placeholder={user.email}
                        />
                        <ProfileField
                            title='Группа'
                            name='group'
                            placeholder={user.group}
                        />
                    </div>
                    <div className={styles.personal_title}>
                        Полная информация
                    </div>
                    <div className={styles.personal_table__data}>
                        <ProfileField
                            title='Серия паспорта'
                            name='passportSeries'
                            placeholder={userData.passportSeries}
                        />
                        <ProfileField
                            title='Номер паспорта'
                            name='passportNumber'
                            placeholder={userData.passportNumber}
                        />
                        <ProfileField
                            title='Адрес'
                            name='adress'
                            placeholder={userData.adress}
                        />
                        <ProfileField
                            title='Предыдущие образовние'
                            name='previousEducation'
                            placeholder={userData.previousEducation}
                        />
                        <ProfileField
                            title='Место предыдущего образования'
                            name='previousEducationPlace'
                            placeholder={userData.previousEducationPlace}
                        />
                        <ProfileField
                            title='Год окончания'
                            name='previousEducationYear'
                            placeholder={userData.previousEducationYear}
                        />
                        <ProfileField
                            title='Телефон'
                            name='phone'
                            placeholder={userData.phone}
                        />
                    </div>
                    <div className={styles.personal_title}>
                        Безопасность
                    </div>
                    <div className={`${styles.personal_table__data} ${styles.personal_table__alert}`}>
                        <ProfileField
                            title='Пароль'
                            name='password'
                            placeholder="********"
                        />
                        <ProfileField
                            title='Подтверждение пароля'
                            name='passwordConfirm'
                            placeholder="********"
                        />
                    </div>
                    <div className={styles.form_footer}>
                        <button className={styles.form_footer__button} type="submit">Подтвердить</button>
                        <div className={(updateStaus ? '' : styles.hiden)}>
                            <SuccessButton title="Данные успешно обновлены" />
                        </div>
                    </div>

                </Form>
            </Formik>

        </div >
    )
}

export default PersonalPage