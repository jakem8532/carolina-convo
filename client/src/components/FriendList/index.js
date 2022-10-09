import React from "react";
import { Link } from 'react-router-dom'

const FriendList = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
        return <p className="no-friends">{username} has no friends lol</p>
    }

    return (
        <div>
            <h5>
                {username}'s {friendCount} {friendCount === 1 ? 'friend': 'friends'}
            </h5>
            {friends.map(friend => (
                <button className="btn friend-btn" key={friend._id}>
                    <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
                </button> 
            ))}
        </div>
    )
}

export default FriendList