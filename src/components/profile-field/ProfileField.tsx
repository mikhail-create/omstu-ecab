import { Field } from 'formik'
import React from 'react'
import styles from './profilefield.module.scss'

interface ProfileFieldProps {
    title: string | "",
    name: string | "",
    placeholder: string | ""
}

function ProfileField(props: ProfileFieldProps) {
    return (
        <div className={styles.field}>
            <div className={styles.field__title}>
                <span>
                    {props.title}
                </span>
            </div>
            <Field
                className={styles.field__input}
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                value={undefined}
            />
        </div>
    )
}

export default ProfileField