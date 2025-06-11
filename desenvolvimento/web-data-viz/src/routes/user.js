var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
router.post("/register", function (req, res) {
    userController.register(req, res);
})
router.post("/authenticate", function(req, res){
    userController.authenticate(req, res)
})
router.post("/validate", function(req,res){
    userController.validateEmail(req,res)
})
module.exports = router;