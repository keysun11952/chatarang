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
            <form className="SignIn" onSubmit={this.handleSubmit} style={styles.form}>
                <input type="text" name="username" placeholder="Username" style={styles.input}
                    value={this.state.username} onChange={this.handleChange} />
                <button type="submit" style={styles.button}>Sign In</button>
            </form>
        )
    }
}

const styles = {
    form: {
        marginLeft: '40vw',
        marginTop: '20vw',
    },
    input: {
        padding: '1vw 1vw',
    },
    button: {
        padding: '1vw 1vw',
    },
}

export default SignIn
