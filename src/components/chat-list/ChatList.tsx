import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import ChatContact from '../chat-contact/ChatContact'
import styles from './chatlist.module.scss'

function ChatList() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                <div className={styles.list__title}>
                    <h2>Сообщения</h2>
                </div>
                <div className={styles.list__items}>
                    <ChatContact
                        name="Василий Иванов"
                        unreadedMessages={2}
                    />
                    <ChatContact
                        name="Петр Петров"
                    />
                </div>
            </div>
        </div>

    )
}

export default ChatList