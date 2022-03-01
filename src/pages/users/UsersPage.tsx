import React, { useEffect, useState } from 'react'
import { userService } from '../../_services/user.service'

function UsersPage() {

    const [users, setUsers] = useState({})

    function getData() {
        userService.getAll().then(users => {
            setUsers({ users })
            console.log(typeof users);
        });
        
        
    }

    useEffect(() => {
        getData()
      }, [])
    
    return (
        <div>
            {JSON.stringify(users)}
        </div>
    )
}

export default UsersPage