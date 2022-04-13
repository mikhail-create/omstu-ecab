import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import styles from './chatblank.module.scss'

function ChatBlank() {
    return (
        <div className={styles.content}>
            <AiOutlineMessage color='#3F3F44' size={48} />
            <div className={styles.content__title}>Выберите чат</div>
        </div>
    )
}

export default ChatBlank