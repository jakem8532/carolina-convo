const { Schema, model } = require("mongoose");
const inviteSchema = require("./Invites");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /([\w-]+)@([\w]+)\.([\w]{2,3})/,
        "Please input a valid email address!",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    invites: [inviteSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

userSchema.virtual("inviteCount").get(function () {
  return this.invites.length;
});

const User = model("User", userSchema);

module.exports = User;
