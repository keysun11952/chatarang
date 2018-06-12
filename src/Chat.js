import React, { Component } from 'react'
import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList.js'

class Chat extends Component {
    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList />
            </div>
        )
    }
}

export default Chat;
