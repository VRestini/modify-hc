const { load } = require("nodemon/lib/config")
var quizModel = require("../models/quizModel")
function loadQuiz(req, res){
    quizModel.load().then(function(response){
        if(response.length >= 1)
            res.status(200).json(response)
        else
                res.status(204).send("Nenhum resultado encontrado!")
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
            else
                res.status(204).send("Nenhum resultado encontrado!")
        })
    }
}
function loadQuestion(req, res){
    var quiz = req.body.quizServer
    console.log(quiz)
    if(quiz == undefined)
        res.status(400).send("Undefined!")
    else{
        quizModel.loadQuestion(quiz).then(function(response){
            if(response.length >= 1)
                res.status(200).json(response)
            else
                res.status(204).send("Nenhum resultado encontrado!")
        })
    }
}
function loadAlternatives(req, res){
    var idQuestion = req.body.idQuestionServer
    if(idQuestion == undefined)
        res.status(400).send("Undefined!")
    else{
        quizModel.loadAlternatives(idQuestion).then(function(response){
            if(response >= 1)
                res.status(200).json(response)
            else
                res.status(204).send("Nennhum resultado encontrado")
        })
    }
}
module.exports = {
    loadQuiz,
    loadQuizByDifficulty,
    loadQuestion,
    loadAlternatives
}