const router = require("express").Router();
const userController = require("../Controllers/userController");

// Demo Routes
router.get("/hlo", userController.getHlo);

// Routes
router
  .route("/")
  .get(userController.getCondidateList)
  .post(userController.createCondidate);

module.exports = router;
