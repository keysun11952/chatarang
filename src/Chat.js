import React, { Component } from 'react'
import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList.js'
import MessageForm from './MessageForm.js'

class Chat extends Component {
    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList />
                <MessageForm />
            </div>
        )
    }
}

export default Chat;
