import React from 'react'
import styles from './chat-contact.module.scss'

interface ChatContactProps {
    name: string,
    unreadedMessages?: number
}

function ChatContact(props: ChatContactProps) {
    return (
        <div className={styles.contact}>
            <div>
                🙂
            </div>
            <div>
                {props.name}
            </div>
            <div className={props.unreadedMessages ? '' : styles.hiden}>
                {props.unreadedMessages}
            </div>
        </div>
    )
}

export default ChatContact