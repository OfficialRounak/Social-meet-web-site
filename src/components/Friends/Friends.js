import React from 'react'
import './friends.css'

const Friends = ({friends}) => {
    return (
        <li className='friends'>
            <img className='friend-img' src={friends.profilePicture} alt="f-img" />
            <span className='friend-name'>{friends.username}</span>
        </li>
    )
}

export default Friends