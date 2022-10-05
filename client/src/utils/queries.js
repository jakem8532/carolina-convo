import { gql } from '@apollo/client'

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            friendCount
            inviteCount
            invites {
                _id
                chatTitle
                senderUsername
                chatId
            }
            friends {
                _id
                username
                email
                friendCount
            }
            chats {
                _id
                title
                createdAt
                messages {
                    createdAt
                    messageBody
                    username
                }
            }
        }
    }
`

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
        }
    }
`

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
        }
    }
`

export const QUERY_CHATS = gql`
    query chats($username: String) {
        chats(username: $username) {
            _id
            title
            createdAt
            messages {
                _id
                createdAt
                messageBody
                username
            }
        }
    }
`
