import React from 'react'
import styles from './chatunselected.module.scss'
import ChatBlank from '../../components/chat-blank/ChatBlank'
import ChatList from '../../components/chat-list/ChatList'

function ChatUnselectedPage() {
  return (
    <div className={styles.chat}>
        <ChatList />
        <ChatBlank />
    </div>
  )
}

export default ChatUnselectedPage