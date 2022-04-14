import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ChatContact from '../chat-contact/ChatContact'
import styles from './chatlist.module.scss'

function ChatList() {
    let { userData } = useTypedSelector(state => state.auth)
    const [chats, setChats] = useState(
        [
            {
                room_id: "",
                users: [
                    {
                        user_id: "",
                        name: "",
                    },
                    {
                        user_id: "",
                        name: "",
                    }
                ]
            }
        ]
    )

    useEffect(() => {
        const email = localStorage.getItem('email')
        axios.get(`http://localhost:5000/chat/get/${email}`).then(res => {
            setChats(res.data)
        })
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                <div className={styles.list__title}>
                    <h2>Сообщения</h2>
                </div>
                <div className={styles.list__items}>
                    {
                        chats.map(chat => (
                            <ChatContact key={chat.room_id} room={chat.room_id} name={
                                chat.users.filter(user => user.name !== userData?.name)[0]?.name
                            } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatList