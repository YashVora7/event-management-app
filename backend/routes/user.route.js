const { Router } = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");

const userRoute = Router();

userRoute.post("/register", userRegister);

userRoute.post("/login", userLogin);

module.exports = userRoute;
