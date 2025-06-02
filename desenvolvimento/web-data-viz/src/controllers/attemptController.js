var attemptModel = require("../models/attemptModel")
function insertAttempt(req, res) {
    let user_id = req.body.userServer
    let quiz_id = req.body.quizServer
    attemptModel.insertAttempt(user_id, quiz_id).then(
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
module.exports = {
    insertAttempt
}