import React, { useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { store } from '../../store/store'
import styles from './userprofile.module.scss'

function UserProfile() {
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')
    const state = store.getState()
    useEffect(() => {
        setGroup(state.auth.userData.group)
        setName(state.auth.userData.name)
    }, [state])
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.profile_info__image}>
                    {/* IMAGE */}
                </div>
                <div className={styles.profile_info_wrapper}>
                    <div className={styles.profile_info_wrapper__name}>
                        {name.split(' ')[0]}
                    </div>
                    <div className={styles.profile_info_wrapper}>
                        {group}
                    </div>
                </div>
            </div>
            <div className={styles.profile_notifications}>
                <MdNotificationsNone color='#3F3F44' size="26" />
            </div>
        </div>
    )
}

export default UserProfile