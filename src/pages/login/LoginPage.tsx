import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { authService } from '../../_services/auth.service'
import styles from './loginpage.module.scss'

function LoginPage() {
    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    authService.login(values.email, values.password)
                }}
            >
                <Form className={styles.form}>
                    <h1>Login</h1>
                    <div className={styles.input_container}>
                        <Field name="email" type="email" />
                        <Field name="password" type="password" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage