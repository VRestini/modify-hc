var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");
router.get("/load", function(req, res){
    quizController.loadQuiz(req, res)
})
module.exports = router;