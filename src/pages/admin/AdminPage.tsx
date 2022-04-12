import React from 'react'
import Chat from '../chat/Chat'
import styles from './adminpage.module.scss'

function AdminPage() {
  return (
    <div className={styles.admin}>
        <Chat />
    </div>
  )
}

export default AdminPage