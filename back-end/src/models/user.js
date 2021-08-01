const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Data = require("./data");

const url = process.env.cloudant_url + '/user';
const cqs = require('cloudant-quickstart');
const db = cqs(url);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],

    isAdmin: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("datas", {
  ref: "Data",
  localField: "_id",
  foreignField: "owner",
});

// userSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();

//   delete userObject.password;
//   delete userObject.tokens;
//   delete userObject.isAdmin;

//   return userObject;
// };

userSchema.methods.generateAuthToken = async function () {
  console.log("this is mock");
  const user = this;
  // console.log(user);
  console.log("token generation");
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_ENV);

  user.tokens = user.tokens.concat({ token });
  await db.update(user);

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  // const user = await User.findOne({ email });
  const user = await db.query({email});
  // console.log(user);

  if (user.length < 1) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user[0].password);
  // console.log(isMatch);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  console.log(user[0]);
  return user[0];
};

// Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// Delete user datas when user is removed
userSchema.pre("remove", async function (next) {
  const user = this;
  await Data.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
