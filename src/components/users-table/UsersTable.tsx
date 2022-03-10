import React, { useEffect, useState } from 'react'
import { userService } from '../../_services/user.service';
import styles from './userstable.module.scss'

const [users, setUsers] = useState()

function UsersTable() {
    
    function getUsersData() {
        userService.getAll().then(response => {
              const objectArray = Object.entries(response);
              
              objectArray.forEach(([key, value]) => {
                console.log(key);
                console.log(value); 
              });
        });
    }

    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <div className={styles.content}>
            {
            
            }
        </div>
    )
}

export default UsersTable