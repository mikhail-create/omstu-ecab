import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { authService } from '../../_services/auth.service'
import styles from './registrationpage.module.scss'

function RegistrationPage() {
    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => {
                    authService.registration(values.name, values.email, values.password)
                }}
            >
                <Form className={styles.form}>
                    <span className={styles.form_header}>
                        <h1>Registration</h1>
                    </span>
                    
                    <div className={styles.input_container}>
                        <Field name="name" type="text" placeholder="Name" />
                        <Field name="email" type="email" placeholder="Email" />
                        <Field name="password" type="password" placeholder="Password" />
                    </div>
                    <button type="submit">Submit</button>
                    <div className={styles.login_links}>
                        <span className={styles.login_links__item}>
                            <a href='/login'>
                                Already have account?
                            </a>
                        </span>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default RegistrationPage