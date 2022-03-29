import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fileService } from '../../_services/files.service'
import CourseCard from '../course-card/CourseCard'
import Dropzone from '../dropzone/Dropzone'
import UploadButton from '../upload-button/UploadButton'
import styles from './courseslist.module.scss'

// interface UserFiles {
//     course: number;
//     name: string;
//     path: string;
//     semester: string;
// }

function CoursesList() {
    const [data, setData] = useState([])
    const [userFiles, setUserFiles] = useState()
    const [file, setFile] = useState(Object)
    const [fileName, setFileName] = useState(String)

    function uploadFile(file: object, name: string) {
        setFile(file)
        setFileName(name)
    }

    function clearFile() {
        setFile('')
        setFileName('')
    }

    const { userData } = useTypedSelector(state => state.auth)

    useEffect(() => {
        fileService.getUserFiles().then(res => {
            setData(res.data)
            // setData(Object.entries(res.data))
        })
    }, [])

    return (
        <div className={styles.courses}>
            <Formik
                initialValues={{ course: "", name: "", semester: "" }}
                onSubmit={(values) => {
                    let formData = new FormData()
                    formData.append('file', file[0])
                    formData.append('course', values.course)
                    formData.append('name', values.name)
                    formData.append('semester', values.semester)
                    console.log()
                    axios.post(`http://localhost:5000/files/${userData.email}`, formData)
                }}
            >
                <Form className={styles.courses_form}>
                    <div className={styles.courses__title}>
                        Загрузка работы
                    </div>
                    <Field
                        className={styles.courses_form_input}
                        name="course"
                        placeholder="Дисциплина"
                    />
                    <Field
                        className={styles.courses_form_input}
                        name="name"
                        placeholder="Название работы"
                    />
                    <Field
                        name="semester"
                        as="select"
                        placeholder="Семестр"
                        className={styles.courses_form_input}
                    >
                        <option className={styles.option} >Семестр</option>
                        <option className={styles.option} value="1">1</option>
                        <option className={styles.option} value="2">2</option>
                        <option className={styles.option} value="3">3</option>
                        <option className={styles.option} value="4">4</option>
                        <option className={styles.option} value="5">5</option>
                        <option className={styles.option} value="6">6</option>
                        <option className={styles.option} value="7">7</option>
                        <option className={styles.option} value="8">8</option>
                    </Field>
                    <Dropzone uploadFile={uploadFile} />
                    <div className={styles.file} onClick={clearFile}>
                        {fileName
                            ? <> {fileName} <MdClose width="16px" /></> : <br></br>
                        }
                    </div>

                    <button type='submit'>
                        <UploadButton />
                    </button>
                </Form>
            </Formik>
            <div className={styles.courses__title}>
                Ваши дисциплины
            </div>
            <div className={styles.courses_header}>
                <div className={styles.courses_header__name}>
                    Название дисциплины
                </div>
                <div className={styles.courses_header__count}>
                    Кол-во работ
                </div>
            </div>
            <div className={styles.courses_body}>
                {
                   Object.entries(data).map((item) => <CourseCard course={item[0]} items={item[1]} />)
                }
            </div>
        </div>
    )
}

export default CoursesList
