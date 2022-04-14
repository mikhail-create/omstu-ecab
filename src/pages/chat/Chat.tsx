import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import ChatContact from '../../components/chat-contact/ChatContact';
import ChatList from '../../components/chat-list/ChatList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChatData } from '../../_models/chat-model';
import styles from './chat.module.scss'

function Chat() {
    const { userData } = useTypedSelector(state => state.auth)
    const params = useParams()
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState<ChatData[]>([])
    const client = useRef<Socket>()

    useEffect(
        () => {
            const socket = io(`http://localhost:5000/`);
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
            <ChatList />
            <div className={styles.chat_content}>
                <div className={styles.chat_content__header}>
                    <ChatContact
                        name="Петр Петров"
                        room=""
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

