const express = require("express");

const routeControl = require("../middleware/middleware");

const userController = require("../controller/userController");

const router = express.Router();

router.get("/getUser", userController.getUser);

router.get("/getUserById/:id", userController.getUserById);


router.post("/addUser", userController.createUser);

module.exports = router;
