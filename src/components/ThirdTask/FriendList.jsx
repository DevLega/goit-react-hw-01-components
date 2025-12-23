import React from 'react'

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <li
                    key={friend.id}
                    style={{
                        backgroundColor: friend.isOnline ? "green" : "red"
                    }}
                >
                    <span>{friend.isOnline ? 'Online' : 'Offline'}</span>
                    <img src={friend.avatar} alt={friend.name} width={48} />
                    <p>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}
