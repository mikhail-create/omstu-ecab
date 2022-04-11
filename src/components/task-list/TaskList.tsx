import React, { useEffect, useState } from 'react'
import styles from './tasklist.module.scss'
import { useParams } from 'react-router-dom'
import { history } from '../../_helpers/history'
import { MdArrowBack, MdFileDownload } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid';
import { taskService } from '../../_services/tasks.sevice'
import { TaskData } from '../../_models/task.model'

function TaskList() {
    const params = useParams()
    let [data, setData] = useState<TaskData>()

    useEffect(() => {
        (async () => {
            setData((await taskService.getTasksById(params.id)))
            
        })()
    }, [])

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

                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList