import React from 'react'
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Redirect } from 'react-router-dom'


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
        console.log('CHANGE: ', e.target.value)
        console.log('THIS STATE', this.state.credentials)
        this.setState({
           credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value,
           }
        })
    }

    handleLogin = e => {
        console.log('STATE:', this.state.credentials)
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log('PAYLOAD: ', res.data.payload)
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/privateroute')
        })
        .catch(error => console.log('ERROR: ', error))
    }

    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to='protected' />
        }
        return (
            <form onSubmit={this.handleLogin}>
                <input type='text' name='username' value={this.state.credentials.username} placeholder='Username' onChange={this.handleChanges}/>
                <input type='password' name='password' value={this.state.credentials.password} placeholder='Password' onChange={this.handleChanges}/>
                <button>Login</button>
            </form>
        )
    }
}
    

export default Login