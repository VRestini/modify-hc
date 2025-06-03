var userAnswerModel = require("../models/userAnswerModel")
function insertUserAnswer(req, res){
    var attempt_id = req.body.attemptServer
    var wrong = req.body.wrongServer
    var right = req.body.rightServer
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
module.exports = {
    insertUserAnswer
}