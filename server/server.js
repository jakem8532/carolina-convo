const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = required("./config/connection");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
