const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    //Removing Bearer from token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    //if no token exists then return req as is
    if (!token) {
      return req;
    }

    //Check token with secret then sets result in data object
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }

    //returns new updated req
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};