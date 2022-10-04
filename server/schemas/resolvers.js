const { AuthenticationError } = require("apollo-server-express");

const { User, Chat } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("friends")
          .populate("chats");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      const users = await User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("chats");

      return users;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentails");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentails");
      }

      const token = signToken(user);

      return { token, user };
    },

    addChat: async (parent, { title }, context) => {
      if (context.user) {
        const chat = await Chat.create({ title });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { chats: chat._id } },
          { new: true }
        );
        return chat;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addMessage: async (parent, { chatId, messageBody }, context) => {
      if (context.user) {
        const message = await Chat.findByIdAndUpdate(
          { _id: chatId },
          {
            $push: {
              messages: { messageBody, username: context.user.username },
            },
          },
          { new: true }
        );

        return message;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    sendInvite: async (parent, { chatId, chatTitle, receiver }, context) => {
      if (context.user) {
        const invitedUser = await User.findByIdAndUpdate(
          { _id: receiver },
          {
            $addToSet: {
              invites: {
                chatId: chatId,
                chatTitle: chatTitle,
                senderUsername: context.user.username,
              },
            },
          },
          { new: true }
        );

        return invitedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    joinChat: async (parent, { chatId }, context) => {
      if (context.user) {
        const updatedUser = User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { chats: chatId } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeInvite: async (parent, { inviteId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { invites: { _id: inviteId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
