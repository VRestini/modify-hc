const { load } = require("nodemon/lib/config")
var quizModel = require("../models/quizModel")
function loadQuiz(req, res){
    quizModel.load().then(function(response){
        if(response.length >= 1)
            res.status(200).json(response)
    })
}
function loadQuizByDifficulty(req, res){
    var difficulty = req.body.difficultyServer
    console.log(difficulty)
    if (difficulty == undefined) 
        res.status(400).send("Undefined!");
    else{
        quizModel.loadDifficulty(difficulty).then(function(response){
            if(response.length >= 1)
                res.status(200).json(response)
        })
    }
    
}
module.exports = {
    loadQuiz,
    loadQuizByDifficulty
}