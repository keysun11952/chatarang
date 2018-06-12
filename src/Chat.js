import React, { Component } from 'react'
import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList.js'
import MessageForm from './MessageForm.js'

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            messages: [
                {
                    id: 1,
                    username: 'someone',
                    body: 'chat body 1',
                },
                {
                    id: 2,
                    username: 'someone else',
                    body: 'chat body 2',
                },
            ]
        }
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages} />
                <MessageForm />
            </div>
        )
    }
}

export default Chat;
