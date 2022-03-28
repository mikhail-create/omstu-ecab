import React from 'react'
import { MdAdd } from 'react-icons/md'
import styles from './uploadbutton.module.scss'

function UploadButton() {
    return (
        <div className={styles.upload}>
            <div className={styles.upload__icon}>
                <MdAdd color="#3f3f44" size="19" />
            </div>
            <div>
                Загрузить работу
            </div>
        </div>
    )
}

export default UploadButton