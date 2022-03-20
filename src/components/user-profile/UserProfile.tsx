import React from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import styles from './userprofile.module.scss'

function UserProfile() {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.profile_info__image}></div>
                <div className={styles.profile_info_wrapper}>
                    <div className={styles.profile_info_wrapper__name}>
                        Леонов Михаил
                    </div>
                    <div className={styles.profile_info_wrapper_}>
                        САУ-181
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