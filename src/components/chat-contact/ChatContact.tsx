import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './chat-contact.module.scss'

interface ChatContactProps {
    name: string,
    room: string,
}

function ChatContact(props: ChatContactProps) {
    const navigate = useNavigate();
    return (
        <div className={styles.contact} onClick={() => {navigate(`/messages/${props.room}`)}}>
            <div>
                🙂
            </div>
            <div>
                {props.name?.split(' ')[0]}  {props.name?.split(' ')[2]}
            </div>
        </div>
    )
}

export default ChatContact