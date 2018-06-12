import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'

class App extends Component {
  state = {
    user: {
      uid: '1234',
      username: 'keysun11952',
    },
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
