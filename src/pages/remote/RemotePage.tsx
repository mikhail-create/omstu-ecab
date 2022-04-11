import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CourseTask from '../../components/course-task/CourseTask'
import { AuthState } from '../../store/types/authTypes'
import { taskService } from '../../_services/tasks.sevice'
import styles from './remotepage.module.scss'

interface RemotePageProps {
    group: string
}

function RemotePage(props: RemotePageProps) {
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        taskService.getTasksByGroup(props.group).then(res => {
            setTaskList(res)
        })
    }, [props.group])

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

const mapStateToProps = (state: { auth: AuthState }) => {
    console.log(state.auth.userData.group);

    return {
        group: state.auth.userData.group
    };
};
export default connect(mapStateToProps)(RemotePage);