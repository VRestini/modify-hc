var express = require("express");
var router = express.Router();
var userAnswercontroller = require("../controllers/userAnswerController")
router.post("/add-alternative", function(req,res){
    userAnswercontroller.insertUserAnswer(req,res)
})
router.post("/load-alternatives", function(req,res){
    userAnswercontroller.loadUserAnswer(req,res)
})
module.exports = router;