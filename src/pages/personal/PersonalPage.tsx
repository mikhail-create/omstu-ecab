import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ProfileField from '../../components/profile-field/ProfileField'
import SuccessButton from '../../components/success-button/SuccessButton'
import { UserData } from '../../_models/user-model'
import { userService } from '../../_services/user.service'
import styles from './personalpage.module.scss'

function PersonalPage() {
    const [user, setUser] = useState<UserData>({
        email: "",
        name: "",
        password: "",
        group: "",
        roles: [],
        fullData: {
            passportSeries: "",
            passportNumber: "",
            adress: "",
            previousEducation: "",
            previousEducationPlace: "",
            previousEducationYear: "",
            phone: ""
        },
        files: [],
    })
    const [userData, setUserData] = useState(Object)
    const [updateStaus, setUpdateStatus] = useState(String)

    useEffect(() => {
        userService.getUser().then(
            response => {
                setUser(response)
                console.log(user.fullData);
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
                        passportSeries: values.passportSeries ? values.passportSeries : user.fullData.passportSeries,
                        passportNumber: values.passportNumber ? values.passportNumber : user.fullData.passportNumber,
                        adress: values.adress ? values.adress : user.fullData.adress,
                        previousEducation: values.previousEducation ? values.previousEducation : user.fullData.previousEducation,
                        previousEducationPlace: values.previousEducationPlace ? values.previousEducationPlace : user.fullData.previousEducationPlace,
                        previousEducationYear: values.previousEducationYear ? values.previousEducationYear : user.fullData.previousEducationYear,
                        phone: values.phone ? values.phone : user.fullData.phone
                    }
                    userService.updateUser(
                        values.email ? values.email : user.email,
                        fullName,
                        values.group ? values.group : user.group,
                        fullData
                    ).then(
                        response => {
                            setUpdateStatus("Данные успешно обновлены")
                            setTimeout(() => {
                                setUpdateStatus("")
                                setUser(response)
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
                            placeholder={user.fullData.passportSeries}
                        />
                        <ProfileField
                            title='Номер паспорта'
                            name='passportNumber'
                            placeholder={user.fullData.passportNumber}
                        />
                        <ProfileField
                            title='Адрес'
                            name='adress'
                            placeholder={user.fullData.adress}
                        />
                        <ProfileField
                            title='Предыдущие образовние'
                            name='previousEducation'
                            placeholder={user.fullData.previousEducation}
                        />
                        <ProfileField
                            title='Место предыдущего образования'
                            name='previousEducationPlace'
                            placeholder={user.fullData.previousEducationPlace}
                        />
                        <ProfileField
                            title='Год окончания'
                            name='previousEducationYear'
                            placeholder={user.fullData.previousEducationYear}
                        />
                        <ProfileField
                            title='Телефон'
                            name='phone'
                            placeholder={user.fullData.phone}
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