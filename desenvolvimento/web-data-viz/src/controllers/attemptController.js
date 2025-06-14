var attemptModel = require("../models/attemptModel")
function insertAttempt(req, res) {
    let user_id = req.body.userServer
    let quiz_id = req.body.quizServer
    attemptModel.insertAttempt(quiz_id, user_id).then(
        function (result) {
            res.json(result);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao inserir dados na tabela 'attempt'! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}
function loadAttemptByUser(req, res) {
    var user_id = req.body.userServer
    console.log(user_id)
    if (user_id == undefined)
        res.status(400).send("Undefined!");
    else {
        attemptModel.loadAttempt(user_id).then(function (response) {
            if(response.length == 1)
                res.status(200).json(response)
            else
                res.status(204).send("Nenhum resultado encontrado!")
        })
    }
}
function loadAttemptId(req, res) {
    var user_id = req.body.userServer
    var quiz_id = req.body.quizServer
    console.log(user_id)
    if (user_id == undefined)
        res.status(400).send("Undefined!");
    else if (quiz_id == undefined)
        res.status(400).send("Undefined!");
    else {
        attemptModel.loadAttemptId(user_id, quiz_id).then(function (response) {
            if(response.length >= 1)
                res.status(200).json(response[0])
            else
                res.status(204).send("Nenhum resultado encontrado!")
        })
    }
}
function loadAttemptTotalDifficulty(req,res){
    var user_id = req.body.userServer
    attemptModel.loadAttemptTotalDifficulty(user_id).then(function(response){
        if(response.length >= 1)
            res.status(200).json(response)
        else
            res.status(204).send("Nennhum resultado encontrado")
    })
}
function loadAttemptDifficulty(req,res){
    var user_id = req.body.userServer
    attemptModel.loadAttemptDifficulty(user_id).then(function(response){
        if(response.length >= 1)
            res.status(200).json(response)
        else
            res.status(204).send("Nennhum resultado encontrado")
    })
}
function loadIfUserAnswerQuiz(req,res){
    var user_id = req.body.userServer
    attemptModel.loadIfUserAnswerQuiz(user_id).then(function(response){
        if(response.length >= 1)
            res.status(200).json(response)
        else
            res.status(204).send("Nennhum resultado encontrado")
    })
}

module.exports = {
    insertAttempt,
    loadAttemptByUser,
    loadAttemptId,
    loadAttemptDifficulty,
    loadAttemptTotalDifficulty,
    loadIfUserAnswerQuiz
}