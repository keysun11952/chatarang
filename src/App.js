import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'
import SignIn from './SignIn.js'

class App extends Component {
  state = {
    user: {
      uid: 'id',
      username: '',
    },
  }

  setUsername = (username) => {
    const user = this.state.user
    user.username = username
    this.setState({ user })
  }

  greeting = () => {
    if (this.state.user.username === '')
      return <SignIn setUsername={this.setUsername} />
    if (this.state.user.username !== '')
      return <Main user={this.state.user} />
  }

  render() {
    return (
      <div className="App">
        {this.greeting()}
      </div>
    )
  }
}

export default App
