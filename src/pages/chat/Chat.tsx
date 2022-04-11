import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { io } from 'socket.io-client';
import ChatContact from '../../components/chat-contact/ChatContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChatData } from '../../_models/chat-model';
import styles from './chat.module.scss'

function Chat() {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState<ChatData>([])
    let { userData } = useTypedSelector(state => state.auth)

    const socket = io('http://localhost:5000')

    function getMessages() {
        socket.on("message", ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    }

    useEffect(
        () => {
            socket.connect()
            getMessages();
            return () => {
                socket.disconnect()
            }
        }, [chat]
    )

    function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = event.currentTarget.value;
        setMessage(newValue);
        console.log(newValue);
    }

    function onMessageSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const name = userData.name;
        socket.emit("message", { name, message })
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
                        <textarea placeholder='Введите сообщение' onChange={onChange} />
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat

