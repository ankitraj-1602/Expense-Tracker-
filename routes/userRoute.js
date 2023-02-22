// const express = require("express");
// const {
//   loginController,
//   registerController,
// } = require("../controllers/userController");

// //router object
// const router = express.Router();

// //routers
// // POST || LOGIN USER
// router.post("/login", loginController);

// //POST || REGISTER USER
// router.post("/register", registerController);

// module.exports = router;








const express=require('express')
const { login, register } = require('../controllers/userController')
const router=express.Router()

router.post("/login",login)
router.post("/register",register)
module.exports=router