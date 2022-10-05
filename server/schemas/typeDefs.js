const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    chats: [Chat]
    friendCount: Int
    friends: [User]
    inviteCount: Int
    invites: [Invites]
  }

  type Chat {
    _id: ID
    title: String
    createdAt: String
    messages: [Message]
  }

  type Message {
    createdAt: String
    messageBody: String
    username: String
  }

  type Invites {
    _id: ID
    chatTitle: String
    senderUsername: String
    chatId: String
  }

  type Query {
    me: User
    users(username: String): [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChat(title: String!): Chat
    addMessage(chatId: ID!, messageBody: String!): Chat
    addFriend(friendId: ID!): User
    sendInvite(chatTitle: String!, chatId: String!, receiver: String!): User
    joinChat(chatId: String!): User
    removeInvite(inviteId: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
