import React, { useEffect, useState } from 'react'
import { userService } from '../../_services/user.service';
import styles from './userstable.module.scss'

function UsersTable() {

    const [users, setUsers] = useState([])
    function getUsersData() {
        userService.getAll().then(response => {
            setUsers(response)
        });
    }

    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tr id="head">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roles</th>
                </tr>
                {users && users.map((user: any) =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roles}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default UsersTable