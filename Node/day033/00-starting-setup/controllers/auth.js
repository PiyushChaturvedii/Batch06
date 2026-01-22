const User = require("../models/user");
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = "true";
  // const isLoggedIn =
  //   req.get("Cookie").split(";")[2].trim().split("=")[1] === "true";

  console.log(req.session.isLoggedIn);

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader("Set-Cookie", "loggedIn=true; Secure; httponly");
  // req.session.isLoggedIn = true;
  User.findById("6960f27f04a259bf1275edba")
    .then((user) => {
      console.log(user);
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
