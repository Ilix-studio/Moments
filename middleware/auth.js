const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No toke, authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
// exportinf a middleware function that has request and response objects available to it. We are getting the token from the header using request header and we are looking at x-auth-token if there is not token at all and the route is protected and using middleware then its going send a denied message.
// if there is a token but not valid, then its going to run this catch, which will just say not valid,,, if it is valid then its going to say jwt verify , and it will get the user profile.
