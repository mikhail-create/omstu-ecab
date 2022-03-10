import React from 'react'
import Navigation from '../../components/navigation-admin/Navigation'
import UsersTable from '../../components/users-table/UsersTable'
import styles from './adminpage.module.scss'

function AdminPage() {
    return (
        <div className={styles.adminpage}>
            <div className={styles.adminpage_header}>
                Header
            </div>
            <div className={styles.adminpage_wrapper}>
                <div className={styles.adminpage_navigation}>
                    <Navigation current={1} />
                </div>
                <div className={styles.adminpage_wrapper__content}>
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}

export default AdminPage