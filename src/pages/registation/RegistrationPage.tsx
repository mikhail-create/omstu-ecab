import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { MdMail, MdPerson, MdRemoveRedEye, MdVpnKey } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../_services/auth.service'
import styles from './registrationpage.module.scss'

function RegistrationPage() {

    let navigate = useNavigate();
    const [status, setStatus] = useState("")
    const [statusEmail, setStatusEmail] = useState("")
    const [statusPassword, setStatusPassword] = useState("")
    const [statusName, setStatusName] = useState("")
    const requiredEmail = (value: any) => (!!value ? setStatusEmail("Email required") : setStatusEmail(""));
    const requiredName = (value: any) => (!!value ? setStatusName("Name required") : setStatusName(""));
    const requiredPassword = (value: any) => (!!!value ? setStatusPassword("Password required") : setStatusPassword(""));
    const [showPassword, showPasswrodStatus] = useState(Boolean)

    return (
        <div className={styles.registration}>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => {
                    setStatus("")
                    if (!!!statusEmail && !!!statusPassword) {
                        authService.registration(values.name, values.email, values.password)
                            .then(
                                user => {
                                    navigate("/news")
                                },
                                error => {
                                    setStatus(error)
                                }
                            );
                    }
                }}
            >
                <Form className={styles.form}>
                    <span className={styles.form_header}>
                        <h1>Registration</h1>
                    </span>

                    <div className={styles.input_container}>
                        <div className={styles.input_container__field}>
                            <MdPerson className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''} ${statusName ? styles.error : ''}`}
                                name="name"
                                validate={requiredName}
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className={styles.input_container__field}>
                            <MdMail className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''} ${statusEmail ? styles.error : ''}`}
                                name="email"
                                validate={requiredEmail}
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className={styles.input_container__field}>
                            <MdVpnKey className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''} ${statusEmail ? styles.error : ''}`}
                                name="password"
                                validate={requiredPassword}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <MdRemoveRedEye
                                className={`${styles.input_container__icon} ${styles.input_container__password}`}
                                size='20px'
                                onClick={() => {
                                    showPasswrodStatus(!showPassword)
                                }}
                            />
                        </div>
                    </div>

                    <button className={styles.form__button} type="submit">Submit</button>

                    <div className={styles.login_links}>
                        <span className={styles.login_links__item}>
                            <a href='/login'>
                                Already have an account?
                            </a>
                        </span>
                        {status ? <div className={styles.alert}>{status}</div> : <br></br>}
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default RegistrationPage