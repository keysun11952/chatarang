import React, { Component } from 'react'
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Sidebar />
                <Chat />
            </div>
        )
    }
}

export default Main;
