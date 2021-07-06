import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

import AddFriend from './AddFriend'



const Friends = () => {

    const [ friends, setFriends ] = useState([])
    

    const getFriends = () => {
        axiosWithAuth()
        .get('/api/friends/')
        .then(response => {
            console.log('FRIENDS DATA: ', response.data)
            setFriends(response.data)
        })
        .catch(error => console.log)
    }
    
    useEffect(() => {
        getFriends()
    }, [])


    return (
        <>
            <h1>Friends Dashboard</h1>
            <AddFriend />
            <main>
                <h2>Friends: </h2>
                {friends.map( friend => 
                    <>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </>
                )}
            </main>
        </>
    )
}

export default Friends