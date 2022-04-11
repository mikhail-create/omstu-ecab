import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChatData } from '../../_types/chat-model';

function Chat() {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState<ChatData>([])
    let { userData } = useTypedSelector(state => state.auth)

    const socket = io('http://localhost:5000')

    function getMessages() {
        socket.on("message", ({ name, message }) => {
            setChat([ ...chat, { name, message } ])
        })
    }

    useEffect(
        () => {
            getMessages();
        }, [chat]
    )

    function onChange(event: React.FormEvent<HTMLInputElement>) {
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
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ))
    }
    return (
        <div>
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div>
                    <input
                        name="message"
                        onChange={onChange}
                        value={message}
                    />
                </div>
                <button>Send Message</button>
            </form>
            
            <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
            </div>
        </div>
    )
}

export default Chat

