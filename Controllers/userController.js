const UserModel = require("../Models/userModels");

// hlo messages
exports.getHlo = (req, res) => {
  res.send("<h1>Hlo MOM...</h1>");
};

// GET /api/v3 get CondidateList
exports.getCondidateList = async (req, res) => {
  let lists = await UserModel.find();

  return res.status(200).json({
    status: "success",
    data: {
      condidateLists: lists,
    },
  });
};

// POST /api/v3 create new condidate
exports.createCondidate = async (req, res) => {
  const { name, gender, password } = req.body;

  const user = new UserModel({
    name: name,
    gender: gender,
    password: password,
  });

  await user.save();

  return res.status(201).json({
    status: "success",
    data: {
      condidate: user,
    },
  });
};
