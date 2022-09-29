const { AuthenticationError } = require("apollo-server-express");

const { User, Convo } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},
  Mutations: {},
};

module.exports = resolvers;
