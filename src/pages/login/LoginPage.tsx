import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { authService } from '../../_services/auth.service'
import styles from './loginpage.module.scss'

function LoginPage() {
    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ name: "", password: "" }}
                onSubmit={(values) => {
                    authService.login(values.name, values.password)
                }}
            >
                <Form className={styles.form}>
                    <h1>Login</h1>
                    <div className={styles.input_container}>
                        <Field name="name" type="text" />
                        <Field name="password" type="password" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage