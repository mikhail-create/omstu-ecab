import React, { useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { userService } from '../../_services/user.service'
import styles from './userprofile.module.scss'

function UserProfile() {
    let { userData } = useTypedSelector(state => state.auth)
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.profile_info__image}></div>
                <div className={styles.profile_info_wrapper}>
                    <div className={styles.profile_info_wrapper__name}>
                        {userData.name ? userData.name : 'Unknown user'}
                    </div>
                    <div className={styles.profile_info_wrapper}>
                        {userData.group ? userData.group : 'Unknown group'}
                    </div>
                    <div className={styles.profile_info_wrapper}>
                        {userData._id ? userData._id : 'Unknown group'}
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