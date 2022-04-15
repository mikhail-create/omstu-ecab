import React, { useEffect, useState } from 'react'
import styles from './tasklist.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { history } from '../../_helpers/history'
import { MdArrowBack, MdFileDownload } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid';
import { taskService } from '../../_services/tasks.sevice'
import { TaskData } from '../../_models/task.model'
import axios from 'axios'
import { useTypedSelector } from '../../hooks/useTypedSelector'

function TaskList() {
    const params = useParams()
    const navigate = useNavigate()
    const { userData } = useTypedSelector(state => state.auth)
    let [data, setData] = useState<TaskData>()

    useEffect(() => {
        (async () => {
            setData((await taskService.getTasksById(params.id)))

        })()
    }, [])

    // CHANGE

    function redirectToDialoges(id: string) {
        axios.get(`http://localhost:5000/chat/getRoom/${userData?._id}/${id}`)
            .then(res => {           
                let room_id = res.data.room_id   
                setTimeout(() => {  navigate(`/messages/${room_id}`)
                }, 0);
            })
    }

    return (
        <div className={styles.task}>
            <div className={styles.task__back} onClick={() => { history.back() }}>
                <MdArrowBack />
                <span>Вернуться к списку работ</span>
            </div>
            <div className={styles.task__name}>
                {data?.name}
            </div>
            {
                data?.tasks.map((task: any, index: number) => {
                    return (
                        <div key={uuidv4()} className={styles.task_body}>
                            <div>
                                <b>
                                    {index}
                                </b>
                            </div>
                            <div className={styles.task_body__description}>
                                {task.description}
                            </div>
                            <div className={styles.task_body__file}>
                                <a href={task.file}>
                                    <MdFileDownload />
                                    <div>
                                        Скачать файл
                                    </div>
                                </a>
                            </div>
                            <div className={styles.task_body__author}>
                                {task.author}
                            </div>

                            <div className={styles.task_body__date}>
                                {task.date}
                            </div>
                            <div className={styles.task_body__chat} onClick={() => {redirectToDialoges(task.author_id)}}>
                                Открыть чат
                            </div>
                        </div>

                        // navigate(`/ messages / ${ task.author_id }`)
                    )
                })
            }
        </div>
    )
}

export default TaskList