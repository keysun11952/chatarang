import React from 'react'
import Message from './Message.js'

const MessageList = (props) => {
    return (
        <div>
            <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.h3}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            <div className="MessageList" style={styles.messageList}>
                {
                    props.messages.map(msg => <Message key={msg.id} message={msg} />)
                }
            </div>
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },
    roomAnnouncement: {
        padding: '2rem 1rem',
    },
    h3: {
        fontSize: '1.5rem',
    },
}

export default MessageList
