const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  }
});

const UserModel = mongooose.model("condidatelists", userSchema);

module.exports = UserModel;
