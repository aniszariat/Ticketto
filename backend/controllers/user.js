const User = require("../models/user");
const bcrypt = require("bcrypt");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.Password, 10)
    .then((hash) => {
      let user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Birthdate: req.body.Birthdate,
        ProfileImg: `${req.protocol}://${req.get("host")}/images/usersImg/${
          req.file.filename
        }`,
        Email: req.body.Email,
        Password: hash,
      });
      console.log(user);
      user
        .save()
        .then(() =>
          res.status(201).json({ message: "registred user !", user: user })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json(error));
};

exports.login = (req, res, next) => {
  User.findOne({ Email: req.body.Email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      bcrypt
        .compare(req.body.Password, user.Password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          res.status(200).json({
            message: "you're logged in",
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

/** USER AUTHORITY */
exports.UpdateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user._id != req.auth.userId) {
        res.status(401).json({ message: "Not allowed !!!" });
      } else {
        const updates = req.file
          ? {
              ...req.body,
              ProfileImg: `${req.protocol}://${req.get(
                "host"
              )}/images/usersImg/${req.file.filename}`,
            }
          : { ...req.body };
        User.findByIdAndUpdate(req.params.id, {
          ...updates,
          _id: req.params.id,
        })
          .then((user) =>
            res
              .status(201)
              .json({ message: "Succefully updated User !", user: user })
          )
          .catch((err) => res.status(400).json({ err }));
      }
    })
    .catch((err) => {
      res.status(402).json({ err, message: "not existing user!" });
    });
};

/** ADMIN AUTHORITY */
exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "this user was Successfully deleted!" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllUsers = (req, res) => {
  User.find()
    .then((User) => res.status(200).json(User))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((User) => res.status(200).json(User))
    .catch((error) => res.status(404).json({ error }));
};
