const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    chats: [Chat]
    friends: [User]
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

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChat(title: String!): Chat
    addMessage(chatId: ID!, messageBody: String!): Chat
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
