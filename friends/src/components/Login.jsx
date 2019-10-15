import React from 'react'
import axios from 'axios'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        console.log('CHANGES: ', e.target.value)
        this.setState({
            ...this.state.credentials,
            [e.target.name] : e.target.value
        })
    }

    handleLogin = e => {
        console.log('SUBMIT:', e)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <input type='text' name='username' placeholder='Username' value={this.state.credentials.username} onChange={this.handleChanges}></input>
                <input type='password' name='password' placeholder='Password' value={this.state.credentials.password} onChange={this.handleChanges}></input>
                <button>Login</button>
            </form>
        )
    }     
}
    

export default Login