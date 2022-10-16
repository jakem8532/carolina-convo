import React from "react";
import ConvoList from "../components/ConvoList";
import PostForm from "../components/PostForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME_BASIC } from "../utils/queries";
import FriendList from "../components/FriendList";

const Home = () => {
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const convos = data?.convos || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className={`convo`}>
        {loading ? (
          <div>Loading</div>
        ) : (
          <ConvoList convos={convos} title="Your conversations" />
        )}
      </div>
      <div>{loggedIn && <div></div>}</div>
      {loggedIn && userData ? (
        <div className="friend-list">
          <FriendList
            username={userData.me.username}
            friendCount={userData.me.friendCount}
            friends={userData.me.friends}
          />
        </div>
      ) : null}
    </main>
  );
};

export default Home;
