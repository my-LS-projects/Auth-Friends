import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'



const Friends = () => {

    const [ newFriendName, setNewFriendName ] = useState('')

    const [ friends, setFriends ] = useState([])

    const getFriends = () => {
        axiosWithAuth()
        .get('api/friends/')
        .then(response => {
            console.log('FRIENDS DATA: ', response)
            setFriends(response.data)
        })
        .catch(error => console.log)
    }
    
    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div>

            <main>
                {friends.map( friend => 
                    <h1>{friend.name}</h1>
                )}
            </main>
        </div>
    )
}

export default Friends