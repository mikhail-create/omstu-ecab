import React, { useEffect, useState } from 'react'
import CourseTask from '../../components/course-task/CourseTask'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { TaskData } from '../../_models/task.model'
import { taskService } from '../../_services/tasks.sevice'
import styles from './remotepage.module.scss'

function RemotePage() {
    const [taskList, setTaskList] = useState<TaskData[]>([])

    let { userData } = useTypedSelector(state => state.auth)

    useEffect(() => {
        taskService.getTasksByGroup(userData.group).then(res => {
            setTaskList(res)
        })
    }, [])

    return (
        <div className={styles.remote}>
            <div className={styles.remote__title}>
                Контактная работа
            </div>
            <div className={styles.remote__description}>
                Здесь отображаются дисциплины из вашего раписания.
            </div>
            <div className={styles.remote__header}>
                <div>
                    Дисциплина
                </div>
                <div>
                    Задания
                </div>
            </div>
            <div className={styles.remote__tasks}>
                {
                    taskList?.map((task: any) => {
                        return (
                            <CourseTask
                                key={task.name}
                                name={task.name}
                                amount={task.tasks.length}
                                _id={task._id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default (RemotePage);