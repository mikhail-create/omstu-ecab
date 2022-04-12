import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import ChatContact from '../../components/chat-contact/ChatContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChatData } from '../../_models/chat-model';
import styles from './chat.module.scss'

function Chat() {
    const params = useParams()
    const [message, setMessage] = useState("")
    const [roomId, setRoomId] = useState("")
    const [chat, setChat] = useState<ChatData[]>([])
    let { userData } = useTypedSelector(state => state.auth)
    const client = useRef<Socket>()
    
    // user: {
    //     dialoges: {
    //         rooms: {
    //             id: user,
    //             messages: {
    //                 auhor: string,
    //                 date: Date,
    //                 text: string
    //             }
    //         }[]
    //     }
    // }

    useEffect(
        () => {
            const socket = io(`http://localhost:5000/`);
            // socket.on('connect', () => console.log(`Client connected: ${socket.id}`));
            socket.on('connect', () => socket.emit('room', params.id));
            socket.on('disconnect', (reason) =>
                console.log(`Client disconnected: ${reason}`)
            );
            socket.on('connect_error', (reason) =>
                console.log(`Client connect_error: ${reason}`)
            );
            socket.on("message", (res: ChatData) => {
                console.log("response: ", res);

                setChat(chat => [...chat, res])
            })
            client.current = socket;
            return () => {
                socket.disconnect()
            }
        }, []
    )

    function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = event.currentTarget.value;
        setMessage(newValue);
    }

    function onMessageSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const name = userData.name;
        const room_id = params.id
        client.current!.emit("message", { name, message, room_id });
        setMessage("")
    }

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div className={name === userData.name ? '' : styles.message__right}>
                {
                    name === userData.name
                        ?
                        <div key={index} className={styles.message__own}>
                            {message}
                        </div>
                        :
                        <div key={index} className={styles.message}>
                            {message}
                        </div>
                }
            </div>

        ))
    }

    return (
        <div className={styles.chat}>
            <div className={styles.chat_contacts}>
                <div className={styles.chat_contacts__title}>
                    <h2>Сообщения</h2>
                </div>
                <div className={styles.chat_contacts__list}>
                    <ChatContact
                        name="Василий Иванов"
                        unreadedMessages={2}
                    />
                    <ChatContact
                        name="Петр Петров"
                    />
                </div>
            </div>
            <div className={styles.chat_content}>
                <div className={styles.chat_content__header}>
                    <ChatContact
                        name="Петр Петров"
                    />
                    <MdMenu size={28} className={styles.menu} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.chat_content__body}>
                        {renderChat()}
                    </div>
                </div>
                <div className={styles.chat_content__control}>
                    <form onSubmit={onMessageSubmit}>
                        <textarea placeholder='Введите сообщение' onChange={onChange} value={message} />
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat

