import React from "react";
import { Link } from "react-router-dom";

const ConvoList = ({ chats }) => {
  if (!chats.length) {
    return <h2>No Conversations Yet!</h2>;
  }

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id} className="">
          <p className="">Created at {chat.createdAt}</p>
          <div className="card-body">
            <Link to={`/convo/${chat._id}`}>
              <p>{chat.convoText}</p>
              <p className="">
                {" "}
                Replies: {chat.replyCount} || Click to{" "}
                {chat.replyCount ? "see" : "start"} the discussion!
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConvoList;
