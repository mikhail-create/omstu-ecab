import React, { useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { userService } from '../../_services/user.service'
import styles from './userprofile.module.scss'

function UserProfile() {
    const [name, setName] = useState(String)
    const [group, setGroup] = useState(String)
    const user = userService.getUser().then(
        user=> {
            setName(user.name)
            setGroup(user.group)
        }
    )
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.profile_info__image}></div>
                <div className={styles.profile_info_wrapper}>
                    <div className={styles.profile_info_wrapper__name}>
                        {name ? name : 'Unknown user'}
                    </div>
                    <div className={styles.profile_info_wrapper_}>
                        {group ? group : 'Unknown group'}
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