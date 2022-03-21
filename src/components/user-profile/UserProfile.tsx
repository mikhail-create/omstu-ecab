import React, { useEffect } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import styles from './userprofile.module.scss'

function UserProfile() {
    const userName = localStorage.getItem('userName')
    const userRoles = localStorage.getItem('userRoles')
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.profile_info__image}></div>
                <div className={styles.profile_info_wrapper}>
                    <div className={styles.profile_info_wrapper__name}>
                        {userName ? userName : 'Unknown user'}
                    </div>
                    <div className={styles.profile_info_wrapper_}>
                        {userRoles ? userRoles : 'Unknown roles'}
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