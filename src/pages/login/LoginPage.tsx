import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik'
import React, { useState } from 'react'
import { MdMail, MdVpnKey, MdRemoveRedEye } from "react-icons/md"
import { authService } from '../../_services/auth.service'
import styles from './loginpage.module.scss'

function LoginPage() {

    const [status, setStatus] = useState("")
    const required = (value: any) => (value ? undefined : setStatus("Email and password required"));
    const [showPassword, showPasswrodStatus] = useState(Boolean)


    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    setStatus("")
                    authService.login(values.email, values.password)
                        .then(
                            user => {
                                console.log(user);

                            },
                            error => {
                                setStatus(error)
                            }
                        );
                }}
            >
                <Form className={styles.form}>
                    <span className={styles.form_header}>
                        <h1>Login</h1>
                    </span>

                    <div className={styles.input_container}>
                        <div className={styles.input_container__field}>
                            <MdMail className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''}`}
                                validate={required}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className={styles.input_container__field}>
                            <MdVpnKey className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''}`}
                                validate={required}
                                name="password"
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
                            <a href='#'>
                                Forgot password?
                            </a>
                        </span>
                        <span className={styles.login_links__item}>
                            <a href='/registration'>
                                Don't have an account?
                            </a>
                        </span>
                        {status ? <div className={styles.alert}>{status}</div> : <br></br>}
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage