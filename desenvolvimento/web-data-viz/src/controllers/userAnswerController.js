var userAnswerModel = require("../models/userAnswerModel")
function insertUserAnswer(req, res){
    var attempt_id = req.body.attemptServer
    var wrong = req.body.wrongServer; 
    var right = req.body.rightServer;
    console.log(`Dados recebidos: attempt_id=${attempt_id}, wrong=${wrong}, right=${right}`);
    userAnswerModel.insertUserAnswer(attempt_id,wrong, right).then(
        function(response){
            res.json(response)
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao inserir dados na tabela 'user_answer'! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}
function loadUserAnswer(req, res){

    var user_id = req.body.userServer
    userAnswerModel.loadAcountUserAnswer(user_id).then(
        function(response){
            res.json(response)
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao inserir dados na tabela 'user_answer'! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}
module.exports = {
    insertUserAnswer,
    loadUserAnswer
}