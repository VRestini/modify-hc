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
module.exports = {
    loadQuiz
}