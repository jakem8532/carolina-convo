const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    chats: [Chat]
    friends: [User]
    chatInvites: [String]
    friendInvites: [String]
  }

  type Chat {
    title: String
    createdAt: String
    invitedBy: String
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
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
