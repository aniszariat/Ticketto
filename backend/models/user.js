const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  FirstName: { type: String, required: false },
  LastName: { type: String, required: false },
  Birthdate: { type: Date, required: false },
  ProfileImg: { type: String, required: false },
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model("user", userSchema); // User modele

module.exports = User;
