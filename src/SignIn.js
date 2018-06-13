import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        username: '',
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.setUsername(this.state.username)
    }

    handleChange = (ev) => {
        this.setState({ username: ev.target.value })
    }

    render() {
        return (
            <form className="SignIn" onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Username"
                    value={this.state.username} onChange={this.handleChange} />
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default SignIn
