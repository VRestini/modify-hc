var express = require("express");
var router = express.Router();
var attemptController = require("../controllers/attemptController")
router.post("/add", function (req, res){
    attemptController.insertAttempt(req, res)
})
router.post("/load", function(req, res){
    attemptController.loadAttemptByUser(req, res)
})
router.post("/load-id", function(req,res){
    attemptController.loadAttemptId(req,res)
})
router.post("/load-difficulty-sum", function(req,res){
    attemptController.loadAttemptTotalDifficulty(req,res)
})
router.post("/load-difficulty", function(req,res){
    attemptController.loadAttemptDifficulty(req,res)
})
router.post("/load-if-user-answer-quiz", function(req,res){
    attemptController.loadIfUserAnswerQuiz(req,res)
})
module.exports = router