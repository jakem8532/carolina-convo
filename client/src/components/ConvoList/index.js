import React from 'react';
import { Link } from 'react-router-dom';

const ConvoList = ({ convo, title }) => {
    if (!convo.length) {
        return <h2>No Conversations Yet!</h2>;
    }

    return (
        <div className="background">
            <h2>{title}</h2>
            {convo &&
                convo.map(convo => (
                    <div key={convo._id} className="">
                        <p className="">
                            Created by {convo.username}
                            Created at {convo.createdAt}
                        </p>
                            <div className="card-body">
                                <Link to={`/convo/${convo._id}`}>
                                    <p>{convo.convoText}</p>
                                    <p className=""> Replies: {convo.replyCount} || Click to {' '}
                                    {convo.replyCount ? 'see' : 'start'} the discussion!
                                    </p>
                                </Link>
                            </div>
                    </div>
            ))}
        </div>
    )
};

export default ConvoList;