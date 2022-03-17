import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik'
import React, { FormEvent, useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdMail, MdVpnKey } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './loginpage.module.scss'

function LoginPage() {
    let { signIn } = useActions()
    let { error } = useTypedSelector(state => state.auth)

    const [status, setStatus] = useState("")
    const [showPassword, showPasswrodStatus] = useState(Boolean)

    const [isEmailValide, setEmailValide] = useState(Boolean)
    const [isPasswordValide, setPasswordValide] = useState(Boolean)

    const requiredEmail = (value: string) => (!!value ? setEmailValide(false) : setEmailValide(true));
    const requiredPassword = (value: string) => (!!value ? setPasswordValide(false) : setPasswordValide(true));

    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    setStatus("")
                    if (!isEmailValide && !isPasswordValide) {
                        signIn(values.email, values.password)
                    } else {
                        setStatus("Email and password required")
                    }
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
                                className={`${styles.input__control} ${status ? styles.error : ''} ${isEmailValide ? styles.error : ''}`}
                                validate={requiredEmail}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className={styles.input_container__field}>
                            <MdVpnKey className={styles.input_container__icon} size='20px' />
                            <Field
                                className={`${styles.input__control} ${status ? styles.error : ''} ${isPasswordValide ? styles.error : ''}`}
                                validate={requiredPassword}
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            {
                                showPassword
                                    ? <FiEye
                                        className={`${styles.input_container__icon} ${styles.input_container__password}`}
                                        size='20px'
                                        onClick={() => {
                                            showPasswrodStatus(!showPassword)
                                        }}
                                    />
                                    : <FiEyeOff
                                        className={`${styles.input_container__icon} ${styles.input_container__password}`}
                                        size='20px'
                                        onClick={() => {
                                            showPasswrodStatus(!showPassword)
                                        }}
                                    />
                            }
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
                        <div className={styles.errors}>
                            {error ? <div className={styles.alert}>{error}</div> : <br></br>}
                            {status ? <div className={styles.alert}>{status}</div> : <br></br>}
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage