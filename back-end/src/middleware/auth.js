const jwt = require("jsonwebtoken");
const User = require("../models/user");

const url = process.env.cloudant_url + '/user';
const cqs = require('cloudant-quickstart');
const db = cqs(url);

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_ENV);
    const user = await db.query({
      _id: decoded._id
    });
    
    console.log(user);

    if (user.length < 1) {
      throw new Error();
    }

    req.token = token;
    req.user = user[0];
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
