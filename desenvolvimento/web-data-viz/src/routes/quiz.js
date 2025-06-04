var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");
router.get("/load", function(req, res){
    quizController.loadQuiz(req, res)
})
router.post("/load-by-difficulty", function(req, res){
    quizController.loadQuizByDifficulty(req, res)
})
router.post("/load-question", function(req,res){
    quizController.loadQuestion(req,res)
})
router.post("/load-alternatives", function(req, res){
    quizController.loadAlternatives(req,res)
})

module.exports = router;