// const express = require("express");
// const {
//   addTransection,
//   getAllTransection,
//   editTransection,
//   deleteTransection,
// } = require("../controllers/transectionCtrl");

// //router object
// const router = express.Router();

// //routes
// //add transection POST MEthod
// router.post("/add-transection", addTransection);
// //Edit transection POST MEthod
// router.post("/edit-transection", editTransection);
// //Delete transection POST MEthod
// router.post("/delete-transection", deleteTransection);

// //get transections
// router.post("/get-transection", getAllTransection);

// module.exports = router;






const express=require('express')
const { addTransection, editTransection, deleteTransection, getAllTransection } = require('../controllers/transectionCtrl')
const router=express.Router()


router.post("/add-transection",addTransection)
router.post("/edit-transection",editTransection)
router.post("/delete-transection",deleteTransection)
router.post("get-transection",getAllTransection)

module.exports=router




