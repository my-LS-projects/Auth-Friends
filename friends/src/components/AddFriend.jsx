import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friends from './Friends'

const AddFriend = () => {

    const [ newFriend, setNewFriend ] = useState({name: '', age: 0})

    const addFriend = () => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => console.log('ADDED FRIEND: ', res))
        .catch(error => console.log('error: ', error.response))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addFriend()
    }

    const handleChanges = e => {
        console.log(newFriend)
        setNewFriend({...newFriend, 
            [e.target.name]: e.target.value})        
    }

    return (
        <div>
            <h2>Add a friend</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' value={newFriend.name} onChange={handleChanges} />
                <input type='text' name='age' placeholder='Age' value={newFriend.age} onChange={handleChanges} />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend