const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: input
        convo: [Convo]
        friends: [User]
    }

    type Convo {
        _id: ID
        convoText: String
        createdAt: String
        username: String
        messageCount: Int 
        messages: [Message]
    }

    type Message {
        _id: ID
        messageBody: String
    }
`;

module.exports = typeDefs;
